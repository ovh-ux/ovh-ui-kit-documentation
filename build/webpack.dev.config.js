import autoprefixer from "autoprefixer";
import baseConfig from "./webpack.base.config";
import cloneDeep from "lodash/cloneDeep";
import merge from "webpack-merge";
import path from "path";
import RemcalcPlugin from "less-plugin-remcalc";
import webpack from "webpack";

const rootPath = path.join(__dirname, "..");
const exclude = [/node_modules/, /dist/];

const client = "webpack-hot-middleware/client?noInfo=true&reload=true";
const server = "webpack/hot/dev-server";
const config = cloneDeep(baseConfig);

export default merge(config, {
    mode: "development",
    devtool: "source-map",
    entry: {
        app: [
            client,
            server
        ]
    },
    output: {
        path: path.join(rootPath, "dist"),
        publicPath: ""
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    resolve: {
        mainFields: ["module", "main"]
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                exclude,
                use: [
                    {
                        loader: "style-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true,
                            plugins: () => [
                                autoprefixer({
                                    browsers: ["last 2 versions", "ie 11"]
                                })
                            ]
                        }
                    },
                    {
                        loader: "less-loader",
                        options: {
                            sourceMap: true,
                            plugins: [RemcalcPlugin]
                        }
                    }
                ]
            }
        ]
    }
});
