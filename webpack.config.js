const path = require('path')

module.exports = {
  entry: './src/app.ts',

  output: {
    filename: 'app.js',
    path: path.join(__dirname, './dist')
  },

  resolve: {
    extensions: ['.ts', '.js']
  },

  // webpack重实现了require方法，导致大量原生包无法调用，据说也可以添加这句："var fs = global.require('fs')"
  target: 'atom',

  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  }
}