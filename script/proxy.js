/**
 * @description webpack conf in proxy
 * document @see https://webpack.js.org/configuration/dev-server/#devserverport
 */
module.exports = {
  '/api': 'http://localhost:3000',
  '/api2': {
    /** 代理地址 */
    target: 'http://localhost:6000',
    /** 重写 pathname */
    pathRewrite: {'^/api2' : ''},
    /** 运行 HTTPS 运行在无效的证书上 */
    secure: false,
    /** 对一定的情况进行判断， 返回指定的内容 */
    bypass: function(req, res, proxyOptions) {
      if (req.headers.accept.indexOf('html') !== -1) {
        console.log('Skipping proxy for browser request.');
        return '/index.html';
      }
    }
  }
}
/** 代理不同的 pathname 到相同的地址 */
module.exports.proxys = [{
  context: ['/auth', '/api'],
  target: 'http://localhost:3000',
}]
