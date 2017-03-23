const webpack = require('webpack')
const path = require('path')
const config = require('./config')
const CleanPlugin = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    vendor: ['react', 'react-dom', 'react-router', 'react-router-redux', 'redux', 'react-redux', 'redux-thunk', 'isomorphic-fetch'],
    bundle: './src/index.js'
  },
  output: {
    filename: '[hash:5].[name].js',
    path: path.resolve('./dist'),
    publicPath: '/',
    chunkFilename: '/[hash:5].[name].chunk.js'
  },
  module: {
    loaders: [
      {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader?presets[]=es2015&presets[]=react'
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        fullbackLoader: 'style-loader',
        loader: ['css-loader?modules&localIdentName=[name]--[local]--[hash:base64:5]']
      })
    }
    ]
  },
  resolve: {
    alias: {
      static: path.resolve(path.join(__dirname, 'src', 'static')),
      components: path.resolve(path.join(__dirname, 'src', 'components'))
    }
  },
  plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'static', 'index_default.html'),
			title: config.site.title,
			keywords: config.site.keywords,
			description: config.site.description,
			header: config.site.header
		}),
    new ExtractTextPlugin({
      filename: 'static/[hash:5].[name].css',
      allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    })
  ]
}
