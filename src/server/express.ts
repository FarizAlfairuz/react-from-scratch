/* eslint-disable import/order */
/* eslint-disable no-console */
import express from 'express'
import path from 'path'

const server = express()

const webpack = require('webpack')
const config = require('../../config/webpack/webpack.client')

const compiler = webpack(config)

const webpackDevMiddleware = require('webpack-dev-middleware')(
  compiler,
  config.devServer.devMiddleware
)

const webpackHotMiddleWare = require('webpack-hot-middleware')(compiler)

server.use(webpackDevMiddleware)
server.use(webpackHotMiddleWare)

const staticMiddleware = express.static('dist')

server.use(staticMiddleware)

server.get('*', (request, response) => {
  response.sendFile(path.resolve('public', 'index.html'))
})

server.listen(8080, () => {
  console.log('Server is listening to port: ', 8080)
})
