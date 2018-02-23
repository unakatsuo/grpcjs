const path = require('path');
	
module.exports = {
	entry: {
		app: "./src/app.js",
		react_page: ["./src/react_app.js"]
	},
	output: {
		path:path.resolve(__dirname, "static"),
		filename: "[name].js"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			}
		]
	}
};