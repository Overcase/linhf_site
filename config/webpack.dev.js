const merge = require('webpack-merge');

const BASE_CONF = require('./webpack.base');
const {  dev_port  } = require('../script/port')
const dev_proxy = require('../script/port')
const { current_resolve, log } = require('./conf_util');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const DEV_CONF = merge({
  mode: 'development',
  // entry: {
  //   index_dev: current_resolve('../src/index.dev.ts')
  // },
  /**
   * document @see https://webpack.js.org/configuration/devtool/#devtool
   */
  devtool: 'inline-source-map',
  // module: {
  //   rules: [
  //     // { test: /\.(js|mjs|jsx|ts|tsx)?$/, loader: "ts-loader" },
  //     {
  //       test: /\.(sa|sc|c)ss$/i,
  //       use: [
  //         {
  //           loader: MiniCssExtractPlugin.loader,
  //           options: {
  //             // you can specify a publicPath here
  //             // by default it uses publicPath in webpackOptions.output
  //             publicPath: '../',
  //             hmr: process.env.NODE_ENV === 'development',
  //             reloadAll: true
  //           },
  //         },
  //         // Translates CSS into CommonJS
  //         'css-loader',
  //         // Compiles Sass to CSS
  //         'sass-loader',
  //       ],
  //     },
  //   ]
  // },
  devServer: {
      contentBase: current_resolve('../dist'),
      port: dev_port,
      proxy: dev_proxy,
  },
}, BASE_CONF)

log(DEV_CONF)

module.exports = DEV_CONF;