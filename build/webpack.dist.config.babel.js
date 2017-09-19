import path from 'path'
import webpack from 'webpack'
import merge from 'webpack-merge'
import autoprefixer from 'autoprefixer'
import WebpackShellPlugin from 'webpack-shell-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import RemcalcPlugin from 'less-plugin-remcalc'
import baseConfig from './webpack.base.config'

const __root = path.join(__dirname, '..')

const exclude = [/node_modules(?!\/ovh-documentation-toolkit)/, /dist/]

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
    }),
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true
    })
  ],
  module: {
    rules: [
      { test: /\.less$/,
        exclude,
        use: ExtractTextPlugin.extract({
          fallback: ['css-loader', 'postcss-loader', 'less-loader'],
          use: [
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
                sourceMap: true,
                plugins: [ RemcalcPlugin ]
              } }
          ]
        }) },
    ]
  }
})
