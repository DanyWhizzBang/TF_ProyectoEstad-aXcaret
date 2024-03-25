const {ipcRenderer} = require('electron')   

let userName;
let password;
let btnLogin;

window.onload=function(){
    userName=document.getElementById("UsuarioTxt")
    password=document.getElementById("ContrasenaTxt")
    btnLogin=document.getElementById("loginBtn")

    btnLogin.onclick = function(){
        
    }
}