
const {ipcRenderer} = require('electron');

var myFullpage = new fullpage('#fullpage', {
    sectionsColor: ['#ff621d', '#ff621d', '#ff621d', '#ff621d', '#ff621d'],
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
    menu: '#menu',
    lazyLoad: true
});

document.getElementById("but").addEventListener("click", function(){
    ipcRenderer.send("changeWindow", "main2");
  });