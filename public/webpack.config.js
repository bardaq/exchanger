const path = require("path");
const merge = require("webpack-merge");

const sass = () => {
	return {
		module: {
			rules: [{
					test: /\.scss$/,
					use: [
						'style-loader',
						'css-loader',
						'sass-loader'
					]
			}]
		}
	}
}

const images = () => {
	return {
		module: {
			rules: [{
					test: /\.(jpg|jpeg|png|svg)$/,
					loader: 'file-loader',
					options: {
						name: 'images/[name].[ext]'
					}
			}]
		}
	}
}

const devServer = () => {
	return {
		devServer: {
			historyApiFallback: true,
			stats: 'errors-only',
			port: 9000
		}
	}
}
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
		return merge([ common, sass() ]);
	}
	if (env === "development") {
		return merge([ common, devServer(), sass() ])
	}
}