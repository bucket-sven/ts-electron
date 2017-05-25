const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: {
    bundle: ['./src/index.tsx']
  },

  output: {
    filename: '[name].js',
    path: path.join(__dirname, './dist')
  },

  node: {
    __dirname: false,
    __filename: false
  },

  resolve: {
    extensions: ['.ts', '.js']
  },

  // webpack重实现了require方法，导致大量原生包无法调用，据说也可以添加这句："var fs = global.require('fs')"
  target: 'atom',

  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader!ts-jsx-loader',
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: true,
      template: path.join(__dirname, './src/index.html')
    }),
    new webpack.DefinePlugin({'process.env.NODE_ENV': '"development"'})
  ]
}