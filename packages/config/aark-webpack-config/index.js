const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const WebpackDevServer = require('webpack-dev-server');

const webpackServerConfig = require('./server/webpack.config');

module.exports = {
  webpack,
  webpackMerge,
  WebpackDevServer,
  webpackServerConfig,
};
