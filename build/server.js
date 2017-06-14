import express from 'express'
import opn from 'opn'
import portScanner from 'portscanner'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from './webpack.dev.config.js'

const app = express()
const port = process.env.PORT || 3000
const compiler = webpack(webpackConfig)

app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    hash: false,
    version: false,
    timings: true,
    assets: false,
    chunks: false,
    chunkModules: false,
    modules: false,
    cached: false,
    reasons: false,
    source: true,
    errorDetails: true,
    chunkOrigins: true,
    children: false
  }
}))

const hotMiddleware = webpackHotMiddleware(compiler)

compiler.plugin('compilation', (compilation) => {
  compilation.plugin('html-webpack-plugin-after-emit', (data, cb) => {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

app.use(hotMiddleware)

portScanner.findAPortNotInUse(port, 6000).then((port) => {
  app.set('port', port)
  app.listen(port, (err) => {
    const url = `http://localhost:${port}`
    if (err) {
      console.log(err)
      return
    }
    console.log('* Environment: %s', app.get('env'))
    console.log('* Listening on %s', url)
    opn(url)
  })
})
