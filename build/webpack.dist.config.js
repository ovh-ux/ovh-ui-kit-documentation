import autoprefixer from "autoprefixer";
import baseConfig from "./webpack.base.config";
import ExtractTextPlugin from "extract-text-webpack-plugin";
import merge from "webpack-merge";
import path from "path";
import RemcalcPlugin from "less-plugin-remcalc";

const rootPath = path.join(__dirname, "..");
const exclude = [/node_modules/, /dist/];

export default merge(baseConfig, {
    mode: "production",
    resolve: {
        mainFields: ["module", "main"]
    },
    output: {
        path: path.resolve(rootPath, "dist")
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "[name]-[hash].css",
            allChunks: true
        })
    ],
    module: {
        rules: [
            {
                test: /\.less$/,
                exclude,
                use: ExtractTextPlugin.extract({
                    fallback: ["css-loader", "postcss-loader", "less-loader"],
                    use: [
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
                })
            }
        ]
    }
});
