const path = require('path');

const current_resolve = _path => {
  return path.resolve(__dirname, _path)
}

const log = console.log;

module.exports = {
  current_resolve,
  log
}
