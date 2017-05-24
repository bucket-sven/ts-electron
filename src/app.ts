import { app, BrowserWindow } from 'electron'
import * as path from 'path'

const iconPath = path.join(__dirname, '../public/images/logo.png')
const port = process.env.PORT || 8080

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
      let path = `http://localhost:${port}/webpack-dev-server/index.html`
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