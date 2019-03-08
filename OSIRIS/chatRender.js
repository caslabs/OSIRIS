const {ipcMain} = require('electron');
var exec = require('child_process').exec, child;
ipcMain.on("execJava", function(event, arg) {
    console.log(arg);
  });