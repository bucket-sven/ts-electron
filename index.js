if (process.env.NODE_ENV === 'production') {
  require('./dist/app')
} else {
  const config = require('./webpack.config')
  config.entry.bundle.unshift("webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server")
  const compiler = require('webpack')(config)
  const WebpackDevServer = require('webpack-dev-server')
  const server = new WebpackDevServer(compiler, {
    hot: true,
    stats: {
      colors: true
    }
  })
  server.listen(8080, function () {
    require('./dist/app')
  })
}