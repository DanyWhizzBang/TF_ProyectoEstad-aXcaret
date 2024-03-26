const {ipcRenderer} = require('electron')   

let userName;
let password;
let btnLogin;

window.onload=function(){
    userName=document.getElementById("userName")
    password=document.getElementById("password")
    btnLogin=document.getElementById("btnLogin")

    btnLogin.onclick = function(){
        const obj = {userName:userName.value, password:password.value}

        ipcRenderer.invoke("login", obj)
    }
}