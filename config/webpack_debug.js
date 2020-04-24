let webpack = require('webpack')

let config = require('./webpack.prod')

let compile = webpack(config)

compile.run()