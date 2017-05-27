const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: {
    bundle: ['./src/frontend/index.tsx']
  },

  output: {
    filename: '[name].js',
    path: path.join(__dirname, './dist')
  },

  resolve: {
    extensions: ['.ts', '.js']
  },

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
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: true,
      template: path.join(__dirname, './src/frontend/index.html')
    }),
    new webpack.DefinePlugin({'process.env.NODE_ENV': '"development"'})
  ]
}