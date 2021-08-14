const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const optimization = () => {
	const config = {
		splitChunks: {
			chunks: 'all',
		},
	}
	if (isProd) {
		config.minimizer = [new TerserWebpackPlugin(), new CssMinimizerPlugin()]
	}
	return config
}

const filename = (ext) =>
	isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`

const styleLoader = (extra) => {
	const loaders = [{ loader: MiniCssExtractPlugin.loader }, 'css-loader']

	if (extra) {
		loaders.push(extra)
	}

	return loaders
}

const esLintPlugin = (isDev) =>
	isDev ? [] : [new ESLintPlugin({ extensions: ['js', 'jsx', 'ts'] })]

module.exports = {
	mode: 'development',
	entry: {
		main: ['@babel/polyfill', './src/index.js'],
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].[contenthash].js',
		assetModuleFilename: 'assets/img/[name][ext]',
		clean: true,
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json'],
	},
	devtool: isDev ? 'source-map' : false,
	optimization: optimization(),
	mode: 'development',
	devServer: {
		historyApiFallback: true,
		contentBase: path.resolve(__dirname, './dist'),
		open: true,
		compress: true,
		hot: isDev,
		port: 8080,
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'webpack Boilerplate',
			template: path.resolve(__dirname, './src/index.html'), // шаблон
			filename: 'index.html', // название выходного файла
			favicon: '',
			hash: isProd,
		}),
		// применять изменения только при горячей перезагрузке
		new webpack.HotModuleReplacementPlugin(),
		new MiniCssExtractPlugin({
			filename: filename('css'),
		}),
		new CopyPlugin({
			patterns: [
				{
					from: 'src/assets/',
					to: 'assets',
					noErrorOnMissing: true,
				},
			],
		}),
		...esLintPlugin(isDev),
	],
	module: {
		rules: [
			// JavaScript
			{
				test: /\.js$/i,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /\.ts$/i,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /\.jsx$/i,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			// images
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff(2)?|eot|ttf|otf|svg|)$/i,
				type: 'asset/inline',
			},
			{
				test: /\.css$/i,
				use: styleLoader(),
			},
			{
				test: /\.less$/i,
				use: styleLoader('less-loader'),
			},
			{
				test: /\.scss$/i,
				use: styleLoader('sass-loader'),
			},
			{ test: /\.xml$/i, use: 'xml-loader' },
			{ test: /\.(csv|tsv)$/, use: 'csv-loader' },
		],
	},
}
