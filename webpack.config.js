var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './javascript/src/main.js',
  output: {
    filename: './bundle.js'
  },
  module : {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.ejs',
      inject: 'body',
    })
  ]
};