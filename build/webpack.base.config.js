import fs from 'fs'
import path from 'path'
import _ from 'lodash'
import webpack from 'webpack'
import formatter from 'eslint-friendly-formatter'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import autoprefixer from 'autoprefixer'
import RemcalcPlugin from 'less-plugin-remcalc'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const __root = path.join(__dirname, '..')

const exclude = [/node_modules(?!\/ovh-documentation-toolkit)/, /dist/]

export default {
  context: __root,
  entry: {
    app: [path.resolve(__root, 'src', 'index.js')]
  },
  output: {
    filename: '[name].js'
  },
  resolve: {
    alias: {
      src: path.resolve(__root, 'src'),
      build: path.resolve(__dirname)
    }
  },
  resolveLoader: {
    alias: {
      'markdown-loader': path.join(__dirname, 'loaders', 'markdown-loader'),
      'templatePreview-loader': path.join(__dirname, 'loaders', 'template-preview-loader')
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': process.env.NODE_ENV
    }),
    new HtmlWebpackPlugin({
      inject: false,
      templateContent: (parameters) => {
        const templatePath = path.join(__root, 'src', 'index.html')
        const fn = _.template(fs.readFileSync(templatePath))
        return fn({ assets: parameters.htmlWebpackPlugin.files })
      }
    }),
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true
    })
  ],
  module: {
    rules: [
      { test: /\.js$/,
        enforce: 'pre',
        exclude,
        use: [
          { loader: 'eslint-loader',
            options: {
              formatter
            } }
        ] },
      { test: /\.js$/,
        exclude,
        use: [
          'ng-annotate-loader',
          'babel-loader'
        ] },
      { test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ] },
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
      { test: /\.md$/,
        use: [
          { loader: 'html-loader',
            options: {
              interpolate: true
            } },
          'markdown-loader'
        ] },
      { test: /\.(html|svg)$/,
        exclude,
        use: [
          { loader: 'html-loader',
            options: {
              interpolate: true,
              minimize: true
            } }
        ] },
      { test: /\.(woff2?|ttf|eot|otf|svg)$/,
        use: [
          { loader: 'url-loader',
            options: {
              limit: 10000
            } }
        ] }
    ]
  }
}
