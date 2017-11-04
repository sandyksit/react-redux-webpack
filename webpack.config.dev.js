const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	// debug: true,
	devtool:'cheap-module-eval-source-map',
	watch: true,
	context: path.join(__dirname, './src'),
	entry: ['./index'],
	output: {
		path: path.join(__dirname, './dist'),
		filename: '/js/[name].bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.html$/,
				loader: 'file?name=[name].[ext]'
			},
			{
				test: [/\.js$/, /\.es6$/],
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract('css!sass')
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				exclude: /node_modules/,
				loader: 'file?name=/css/fonts/[name].[ext]'
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
		root: [
			path.resolve('./src')
		]
	},
	plugins: [
		new ExtractTextPlugin('/css/style.css'),
		new HtmlWebpackPlugin()
	],
	devServer: {
		noInfo: false,
		inline: true,
		contentBase: './src'
	}
};
