const path = require('path')
const express = require('express')
const webpack = require('webpack')
const compression = require('compression')
const httpProxyMiddleware = require('http-proxy-middleware')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const webpackDevConfig = require('./webpack.config.dev')
const config = require('./config')

const app = express()
const compiler = webpack(webpackDevConfig)

app.use(compression())
app.use('/api', httpProxyMiddleware(
  {
    target: 'http://www.example.org',
    changeOrigin: true
  }
))

app.use(
  webpackDevMiddleware(compiler, {
  publicPath: webpackDevConfig.output.publicPath,
  noInfo: true,
  stats: {
    colors: true
  }
})
)

app.use(webpackHotMiddleware(compiler))

app.use(express.static('dev'))

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dev', 'index.html'))
})

let PORT = process.env.PORT || config.port

app.listen(PORT, function() {
  console.log(`Production Express server running at localhost: ${PORT}`)
})
