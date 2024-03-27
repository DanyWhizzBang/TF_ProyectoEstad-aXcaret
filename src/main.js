const { create } = require('domain');
const { app, BrowserWindow, ipcMain, Notification } = require('electron');
const path = require('path'); 

let db = require('./database.js')
let window 

function createWindow(){
    window = new BrowserWindow({
        width:800,
        height:600,
        webPreferences:{
            nodeIntegration:true,
            preload:path.join(__dirname, 'src/controller/login.js')

        }
    })

    window.loadFile('src/view/login.html');
}

ipcMain.handle('login', (event, obj) => {
    validatelogin(obj)
  });

  function validatelogin(obj) {
    const { userName, password } = obj 
    const sql = "SELECT * FROM usuarios WHERE nombreUsuario=? AND contrasena=?"
     db.query(sql, [userName, password], (error, results, fields) => {
       if(error){ console.log(error);}
   
       if(results.length > 0){
          createWindow ()
          win.show()
          winlogin.close()
        }else{
          new Notification({
            title:"login",
            body: 'email o password equivocado'
          }).show()
        }
       
     });
   }


module.exports = {
    createWindow
}