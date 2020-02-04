const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
  bail: true,
  target: 'node',
  devtool: 'source-map',
  context: path.resolve('./'),
  resolve: {
    modules: [path.resolve(process.cwd(), './'), 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
  },
  externals: webpackNodeExternals({
    whitelist: /@aark/,
  }),
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [require.resolve('@aark/babel-preset/node')],
        },
      },
    ],
  },
};
