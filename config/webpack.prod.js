const merge = require('webpack-merge');

const BASE_CONF = require('./webpack.base');
const { current_resolve, log } = require('./conf_util');

const PROD_CONF = merge({
  mode: 'production',
  /**
   * document @see https://webpack.js.org/configuration/devtool/#devtool
   */
  // devtool: 'inline-source-map',
  /**
   * document @see https://webpack.js.org/configuration/optimization/#optimizationminimize
   */
  optimization: {
    minimize: true
  },
}, BASE_CONF)

log(PROD_CONF)

module.exports = PROD_CONF;