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
    index: current_resolve('../src/index.ts'),
    main: current_resolve('../src/main.ts'),
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
   // 引入文件可以省略 后缀名
    extensions: [".ts", ".tsx", ".js"]
  },
  output: {
    path: current_resolve('../dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      { test: /\.(tsx|ts)?$/, loader: "ts-loader" },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 必须使用 绝对路径
      template: current_resolve('../src/pages/document.html'),
      filename:'index.html'
    })
  ]
};

module.exports = base_conf;
