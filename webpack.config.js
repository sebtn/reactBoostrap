var path = require('path')
var webpack = require('webpack')


module.exports = {
	//file we want to put thru process into webpack 
	//is value to the key entry
	entry: './dist/app.js',
	//where do we want the bundle file to go
	//is defined in output
	output: { 
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	devServer: {
		inline: true,
		contentBase: './build',
		port: 3000
	},
// 	module: {
// 		loaders: 
// 		[
// 			{
// 				test:/\.js$/,
// 				exclude:/(node_modules)/,
// 				loader: 'babel-loader',
// 				query: {
// 					presets: ['es2015', 'react']
// 				}
// 			},	
// 			{
// 				test: /\.(jpg|png|jpeg)$/,
// 				loader: 'url-loader?limit=50000'
// 			},
// 			{
// 				test: /\.scss$/,
// 				loader:'style-loader!css-loader!sass-loader'
// 			},
// 		]
// 	}
}