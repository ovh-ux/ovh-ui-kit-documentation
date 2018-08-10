import path from 'path'
import _ from 'lodash'
import merge from 'webpack-merge'
import webpack from 'webpack'
import autoprefixer from 'autoprefixer'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import baseConfig from './webpack.base.config'

const __root = path.join(__dirname, '..')

const exclude = [/node_modules(?!\/ovh-documentation-toolkit)/, /dist/]

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
  ],
  resolve: {
    mainFields: ['module', 'main']
  },
  module: {
    rules: [
      { test: /\.less$/,
        exclude,
        use: [
          { loader: 'style-loader',
            options: {
              sourceMap: true
            } },
          { loader: 'css-loader',
            options: {
              sourceMap: true
            } },
          { loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: () => [
                autoprefixer({
                  browsers: ['last 2 versions', 'ie 11']
                })
              ]
            } },
          { loader: 'less-loader',
            options: {
              sourceMap: true
            } }
        ]
      }
    ]
  }
})
