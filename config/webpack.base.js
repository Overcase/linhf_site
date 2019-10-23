const webpack = require('webpack'); //to access webpack runtime
const HtmlWebpackPlugin = require('html-webpack-plugin');

// util
const { current_resolve, log } = require('./conf_util');

/** document @see https://webpack.js.org/configuration/ */
const base_conf = {
  /**
   * production | development | none
   */
  mode: 'none',
  entry: {
    index: current_resolve('../src/index.js'),
    main: current_resolve('../src/main.js'),
  },
  output: {
    path: current_resolve('../dist'),
    filename: '[name].js',
  },
  module: {
    rules: []
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
};

module.exports = base_conf;
