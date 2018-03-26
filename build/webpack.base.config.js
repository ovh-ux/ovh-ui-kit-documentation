import fs from 'fs'
import path from 'path'
import _ from 'lodash'
import webpack from 'webpack'
import formatter from 'eslint-friendly-formatter'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import LodashModuleReplacementPlugin from "lodash-webpack-plugin";

const __root = path.join(__dirname, '..')

const exclude = [/node_modules(?![\/\\](ovh-documentation-toolkit|ovh-ui-angular))/, /dist/]

export default {
  context: __root,
  entry: {
    app: [path.resolve(__root, 'src', 'index.js')]
  },
  output: {
    filename: '[name]-[hash].js'
  },
  resolve: {
    extensions: [".js", ".json", ".less"],
    alias: {
      src: path.resolve(__root, 'src'),
      build: path.resolve(__dirname),
      '@oui-angular': fs.realpathSync(path.join(__dirname, '../node_modules/ovh-ui-angular/packages'))
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
    new LodashModuleReplacementPlugin({
        shorthands: true,
        collections: true,
        paths: true
    }), // Save bytes on Lodash
    new webpack.optimize.ModuleConcatenationPlugin(), // Enable scope hoisting
    new HtmlWebpackPlugin({
      inject: false,
      templateContent: (parameters) => {
        const templatePath = path.join(__root, 'src', 'index.html')
        const fn = _.template(fs.readFileSync(templatePath))
        return fn({ assets: parameters.htmlWebpackPlugin.files })
      }
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
