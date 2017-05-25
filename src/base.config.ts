import * as path from 'path'
const PORT = process.env.PORT || 8080
const url = `http://localhost:${PORT}/webpack-dev-server/index.html`
const productionURL = path.join('file://', __dirname, './index.html')
const iconPath = path.join(__dirname, '../public/images/logo.png')

const NODE_ENV = function() {
  return process.env.NODE_ENV || 'development'
}()

export module IBaseConfig {
  export interface EnvConfig {
    homePage: string
    other?: string
  }
}

export default {
  iconPath: iconPath,
  NODE_ENV: NODE_ENV,

  development: {
    other: url,
    homePage: productionURL,
  },

  production: {
    homePage: productionURL
  }
}