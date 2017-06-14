import path from 'path'
import webpack from 'webpack'
import merge from 'webpack-merge'
import WebpackShellPlugin from 'webpack-shell-plugin'
import baseConfig from './webpack.base.config'
import projectInformation from '../package.json'

const __root = path.join(__dirname, '..')

export default merge(baseConfig, {
  output: {
    path: path.resolve(__root, 'dist', `latest`)
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new WebpackShellPlugin({
      onBuildEnd: [
        `cp -rf dist/latest dist/v${projectInformation.version}`,
        'cp src/versions.json dist/versions.json'
      ]
    })
  ]
})
