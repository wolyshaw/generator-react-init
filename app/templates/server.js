const express = require('express')
const path = require('path')
const compression = require('compression')
const app = express()
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackDevConfig = require('./webpack.config.dev')
const config = require('./config')
const compiler = webpack(webpackDevConfig)
app.use(compression())
app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackDevConfig.output.publicPath,
  noInfo: true,
  stats: {
    colors: true
  }
}))
app.use(webpackHotMiddleware(compiler))
if (config.debug) {
	app.use(express.static('dev'))
}else{
	app.use(express.static('dist'))
}
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '', 'index.html'))
})
var PORT = process.env.PORT || config.port
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})
