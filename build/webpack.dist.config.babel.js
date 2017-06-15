import path from 'path'
import webpack from 'webpack'
import merge from 'webpack-merge'
import WebpackShellPlugin from 'webpack-shell-plugin'
import baseConfig from './webpack.base.config'

const __root = path.join(__dirname, '..')

export default merge(baseConfig, {
  output: {
    path: path.resolve(__root, 'dist')
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new WebpackShellPlugin({
      onBuildEnd: [
        'cp src/versions.json dist/versions.json'
      ]
    })
  ]
})
