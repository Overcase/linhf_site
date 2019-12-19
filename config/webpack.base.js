const webpack = require('webpack'); //to access webpack runtime
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// util
const { current_resolve, log } = require('./conf_util');

/** document @see https://webpack.js.org/configuration/ */
const base_conf = {
  /**
   * production | development | none
   */
  mode: 'none',
  entry: {
    index: current_resolve('../src/index.tsx'),
    // main: current_resolve('../src/main.ts'),
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    // 引入文件可以省略 后缀名
    extensions: [".ts", ".tsx", ".js"],
    modules: ['node_modules'],
  },
  output: {
    path: current_resolve('../dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      // { test: /\.(js|mjs|jsx|ts|tsx)?$/, loader: "ts-loader" },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              publicPath: '../',
            },
          },
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(js|mjs|jsx|ts|tsx)?$/,
        exclude: /node_modules/,
        // exclude: /@babel(?:\/|\\{1,2})runtime/,
        use: [
          'babel-loader',
          'ts-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 必须使用 绝对路径
      template: current_resolve('../src/pages/document.html'),
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
      // ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
  ]
};

module.exports = base_conf;
