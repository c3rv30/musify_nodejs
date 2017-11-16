'use strict'
var mongoose = require('mongoose');
var url = 'mongodb://c3rv30:killer@ds127854.mlab.com:27854/musify';
var app = require('./app');
var port = process.env.PORT || 3977;

mongoose.Promise = global.Promise;
mongoose.connect(url, (err, res) => {
    if(err){
        throw err;
    }else{
        console.log('La conexion a la  BD esta correcta!');
        app.listen(port, () => {
            console.log('Servidor api rest http://localhost:'+port);
        })
    }
})
