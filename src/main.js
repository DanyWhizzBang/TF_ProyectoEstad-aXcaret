const { create } = require('domain');
const {BrowserWindow}=require ('electron')

let window 

function createWindow(){
    window = new BrowserWindow({
        width:800,
        height:600,
        webPreferences:{
            nodeIntegration:true,
            preload:path.join(_dirname, 'src/controller/login.js')

        }
    })

    window.loadFile('src/view/login.html');
}

module.exports = {
    createWindow
}