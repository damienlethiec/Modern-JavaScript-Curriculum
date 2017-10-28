const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: [
    'babel-polyfill',
    'whatwg-fetch',
    './app/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "index_bundle.js",
    publicPath: '/'
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.svg$/,  loader: 'svg-inline-loader' }
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ]
}
