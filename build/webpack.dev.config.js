import path from 'path'
import _ from 'lodash'
import merge from 'webpack-merge'
import webpack from 'webpack'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import baseConfig from './webpack.base.config'

const __root = path.join(__dirname, '..')

const client = 'webpack-hot-middleware/client?noInfo=true&reload=true'
const server = 'webpack/hot/dev-server'
const config = _.cloneDeep(baseConfig)

export default merge(config, {
  devtool: '#source-map',
  entry: {
    app: [
      client,
      server
    ]
  },
  output: {
    path: path.join(__root, 'dist'),
    publicPath: ''
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new CopyWebpackPlugin([
      { from: 'src/versions.json' }
    ])
  ]
})
