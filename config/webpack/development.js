process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')

webpack = require('webpack')

environment.plugins.prepend('devFlagPlugin',
  new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
  })
)

module.exports = environment.toWebpackConfig()
