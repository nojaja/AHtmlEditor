const path = require('path')
const src = __dirname + "/src"
const dist = __dirname + "/docs"
const webpack = require('webpack')
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyFilePlugin = require('copy-webpack-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: dist
  },
  context: src,
  entry: {
    main: './js/index.js',
  },
  output: {
    filename: 'js/bundle.js',
    sourceMapFilename: '[name].map',
    path: dist,
    publicPath:"/"
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.ttf$/,
      use: ['file-loader']
    }]
  },
  plugins: [
    new MonacoWebpackPlugin({
    // https://github.com/Microsoft/monaco-editor-webpack-plugin#options
    // Include a subset of languages support
    // Some language extensions like typescript are so huge that may impact build performance
    // e.g. Build full languages support with webpack 4.0 takes over 80 seconds
    // Languages are loaded on demand at runtime
    languages: ['javascript', 'css', 'html', 'typescript']
    }),
    new HtmlWebpackPlugin({
      template: "./html/index.html"
    }),
    new CopyFilePlugin(
        [
            {
            from: 'css/*.css',
            to: dist + '/css/'
            }
        ],
        { copyUnmodified: true }
    ),
    new WriteFilePlugin()
  ]
}