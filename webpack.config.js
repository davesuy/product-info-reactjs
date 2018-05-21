var path = require('path');


var DIST_DIR = path.resolve(__dirname, "");
var SRC_DIR = path.resolve(__dirname, "src");

module.exports = {
	entry: './script.js',
	output: {
		path:  DIST_DIR,
		filename: 'transpiled.js',
		publicPath: ''
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: "babel-loader",
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}

};
