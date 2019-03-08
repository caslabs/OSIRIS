// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const {ipcMain} = require('electron');
var exec = require('child_process').exec
var child;

ipcMain.on("changeWindow", function(event, arg) {
  if (arg=="main") {
    mainWindow.loadFile('main.html')
  } else if (arg=="main2") {
    mainWindow.loadFile('test.html')
  }
});

ipcMain.on("execJava", function(event, arg) {
  if (arg=="start") {
    child = exec('java -jar /Users/jeraldy/Desktop/electron-quick-start/ic/Infinite_Campus_Alpha.jar')
  }
  });


ipcMain.on('variable', (event, arg) => {
  console.log(arg)  // prints "I did something for you"
})

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    backgroundColor: '#ff621d',
    resizable: false,
    width: 500,
    height: 700,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
//mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})


