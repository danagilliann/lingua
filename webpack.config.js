const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'src/client/public');
const APP_DIR = path.resolve(__dirname, 'src/client/app');

let config = {
  entry: ['webpack/hot/dev-server', APP_DIR + '/index.jsx'],
  output: {
    path: BUILD_DIR,
    publicPath: '/src/client/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel'
      },
      {
        test: /\.css/,
        loader: ExtractTextPlugin.extract('css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'),
        include: BUILD_DIR
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('index.css')
  ]
};

module.exports = config;
