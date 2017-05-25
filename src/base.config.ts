import * as path from 'path'
const PORT = process.env.PORT || 8080
const url = `http://localhost:${PORT}/webpack-dev-server/index.html`
const productionURL = path.join('file://', __dirname, './index.html')

export module IBaseConfig {
  export interface EnvConfig {
    homePage: string
    other?: string
  }
}

export default {
  development: {
    other: url,
    homePage: productionURL,
  },

  production: {
    homePage: productionURL
  }
}