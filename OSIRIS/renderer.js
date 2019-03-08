const {ipcRenderer} = require('electron');
var oof = document.getElementById('test');
var hellop = document.getElementsByClassName('ele');
console.log(hellop[0])
function myMethod()
{
    oof.value++;
    
    if (oof.value >= 100) {
        ipcRenderer.send("changeWindow", "main");
    }
    console.log('no')
}

setInterval(myMethod, 100);
