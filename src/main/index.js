'use strict'

import path from 'path'
import { app, protocol, BrowserWindow, ipcMain } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'

const isDevelopment = process.env.NODE_ENV !== 'production'

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([{
  scheme: 'app',
  privileges: {
    secure: true,
    standard: true
  }
}])

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 1024,
    height: 768,
    autoHideMenuBar: true,
    // transparent: true,
    frame: false,
    show: false,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // // 点击穿透窗口
  // win.setIgnoreMouseEvents(true)

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }

  win.on('closed', () => {
    win = null
  })

  win.on('app-command', (e, cmd) => {
    // 当用户点击鼠标返回按钮时，导航窗口会后退
    if (cmd === 'browser-backward' && win.webContents.canGoBack()) {
      win.webContents.goBack()
    }
  })

  // 显示窗口将没有视觉闪烁
  win.once('ready-to-show', () => {
    win.show()
  })

  win.once('focus', () => win.flashFrame(false))
  win.flashFrame(true)
  win.setMenu(null)
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      BrowserWindow.addDevToolsExtension(path.resolve(process.cwd(), 'vue-devtools'))
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }
  createWindow()

  // // 注册一个 'CommandOrControl+X' 的全局快捷键
  // globalShortcut.register('CommandOrControl+X', () => {
  //   console.log('CommandOrControl+X is pressed')
  // })
})

app.on('will-quit', () => {
  // // 注销快捷键
  // globalShortcut.unregister('CommandOrControl+X')

  // // 注销所有快捷键
  // globalShortcut.unregisterAll()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', data => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}

// 最小化窗口
ipcMain.on('ipc-min-window', () => {
  win.minimize()
})

// 最大化窗口
ipcMain.on('ipc-max-window', (e, arg) => {
  if (!arg) {
    win.unmaximize()
  } else {
    win.maximize()
  }
})

// 关闭窗口
ipcMain.on('ipc-close-window', () => {
  app.quit()
})

// 在线/离线事件探测
ipcMain.on('online-status-changed', (event, status) => {
  console.log(status)
})