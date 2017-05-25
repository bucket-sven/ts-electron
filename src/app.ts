import { app, BrowserWindow } from 'electron'
import * as path from 'path'
import baseConfig, { IBaseConfig } from './base.config'

const iconPath = path.join(__dirname, '../public/images/logo.png')
const env = process.env.NODE_ENV || 'development'

class App {
  private appWindow: Electron.BrowserWindow;

  public initApp() {
    const self = this
    app.on('ready', () => {
      self.appWindow = new BrowserWindow({
        width: 800,
        height: 600,
        icon: iconPath
      })

      if (process.platform === 'darwin') {
        app.dock.setIcon(iconPath)
      }
      self.appWindow.webContents.openDevTools()
      let config: IBaseConfig.EnvConfig = baseConfig[env]
      let path = config.homePage
      self.appWindow.loadURL(path)
    })

    app.on('close', () => {
      if (process.platform !== 'darwin') {
        app.quit()
      }
    })
  }
}

new App().initApp()