const merge = require('webpack-merge');

const BASE_CONF = require('./webpack.base');
const { current_resolve, log } = require('./conf_util');

const HappyPack = require('happypack');
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });


const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const PROD_CONF = merge({
  mode: 'production',
  /**
   * document @see https://webpack.js.org/configuration/devtool/#devtool
   */
  // devtool: 'inline-source-map',
  /**
   * document @see https://webpack.js.org/configuration/optimization/#optimizationminimize
   */
  plugins: [
    // new CleanWebpackPlugin(['dist'], {
    //   root: current_resolve('..')
    // }),
    new CleanWebpackPlugin(),
      new HappyPack({
      //用id来标识 happypack处理那里类文件
      id: 'happyBabel',
      //如何处理  用法和loader 的配置一样
      loaders: [{
        loader: 'babel-loader?cacheDirectory=true',
      }],
      //共享进程池
      threadPool: happyThreadPool,
      //允许 HappyPack 输出日志
      verbose: true,
    })
  ],
  optimization: {
    minimize: true,
    // runtimeChunk: 'single'
  },
}, BASE_CONF)

log(PROD_CONF)

module.exports = PROD_CONF;