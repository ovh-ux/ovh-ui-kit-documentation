import express from "express";
import opn from "opn";
import portScanner from "portscanner";
import webpack from "webpack";
import webpackConfig from "./webpack.dev.config";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";

const app = express();
const port3000 = 3000;
const port6000 = 6000;
const port = process.env.PORT || port3000;
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
        colors: true,
        hash: false,
        version: false,
        timings: true,
        assets: false,
        chunks: false,
        chunkModules: false,
        modules: false,
        cached: false,
        reasons: false,
        source: true,
        errorDetails: true,
        chunkOrigins: true,
        children: false
    }
}));

const hotMiddleware = webpackHotMiddleware(compiler);

compiler.plugin("compilation", (compilation) => {
    compilation.plugin("html-webpack-plugin-after-emit", (data, cb) => {
        hotMiddleware.publish({ action: "reload" });
        cb();
    });
});

app.use(hotMiddleware);

/* eslint-disable no-console */
portScanner.findAPortNotInUse(port, port6000).then((portUnused) => {
    app.set("port", portUnused);
    app.listen(portUnused, (err) => {
        const url = `http://localhost:${portUnused}`;
        if (err) {
            console.log(err);
            return;
        }
        console.log("* Environment: %s", app.get("env"));
        console.log("* Listening on %s", url);
        opn(url);
    });
});
/* eslint-enable no-console */
