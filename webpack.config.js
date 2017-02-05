'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {

  devtool: 'eval',

  entry: {
    demo: ['./demo/index.js'],
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }]
  },

  output: {
    path: path.join(__dirname, 'demo'),
    filename: 'bundle.js',
    publicPath: '/demo/'
  },

  resolve: {
    extensions: ['', '.js'],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    contentBase: './demo'
  }
};