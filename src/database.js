const mysql = require ('mysql')

const db = mysql.createConnection({
    host:'localhost',
    user:'DaniAr',
    password:'Vanguard#104',
    database:'usuarios'
});

module.exports = db