const path = require("path");
const merge = require("webpack-merge");
const devServer = require("./webpack/devserver");
const sass = require("./webpack/sass");
const images = require("./webpack/images");

const common = merge([
    {
        entry: path.join(__dirname, "app", "index.js"),
        output: {
            path: path.join(__dirname, "dist"),
            filename: "bundle.js",
            publicPath: "/"
        },
        externals: {
            config: JSON.stringify(require(path.join(__dirname, "config", "config.json")))
        },
        module: {
            rules: [
                { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
            ]
        }
    },
    images()
]);


module.exports = function(env) {
    if (env === "production") {
        return merge([
            common,
            sass()
        ]);
    }
    if (env === "development") {
        return merge([
            common,
            devServer(),
            sass()
        ])
    }

}