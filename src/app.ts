import { app, BrowserWindow } from 'electron'
import baseConfig, { IBaseConfig } from './base.config'

class App {
  private appWindow: Electron.BrowserWindow;

  public initApp() {
    const self = this
    app.on('ready', () => {
      self.appWindow = new BrowserWindow({
        width: 800,
        height: 600,
        icon: baseConfig.iconPath
      })

      if (process.platform === 'darwin') {
        app.dock.setIcon(baseConfig.iconPath)
      }
      self.appWindow.webContents.openDevTools()
      let config: IBaseConfig.EnvConfig = baseConfig[baseConfig.NODE_ENV]
      let path = config.homePage
      self.appWindow.loadURL(path)
    })

    app.on('window-all-closed', () => {
      if (process.platform !== 'darwin') {
        app.quit()
      }
    })
  }
}

new App().initApp()