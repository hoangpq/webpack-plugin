var path = require('path');
var path = require('path');
var textLoader = require('./loaders/text');

module.exports = {
  devtool: 'eval',
  entry: './index',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolveLoader: {
    alias: {
      "text-loader": path.join(__dirname, './loaders/text')
    }
  },
  module: {
    loaders: [
      {test: /\.txt$/, loader: 'text-loader'},
    ]
  }
};