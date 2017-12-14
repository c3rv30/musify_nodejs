'use strict'
var mongoose = require('mongoose');
var url = 'mongodb://c3rv30:killer@ds127854.mlab.com:27854/musify';
var app = require('./app');
var port = process.env.PORT || 3977;

mongoose.Promise = global.Promise;

// Connect to MongoDB on localhost:3977
mongoose.connect(url, {useMongoClient: true}, (err, res) => {
    if(err){
        throw err;
    }else{
        console.log('Connection to the database is established.');
        app.listen(port, () => {
            console.log('API REST server -> http://localhost:'+port);
        });
    }
});

/*
mongoose.connect(url, (err, res) => {
    if(err){
        throw err;
    }else{
        console.log('La conexion a la  BD esta correcta!');
        app.listen(port, () => {
            console.log('Servidor api rest http://localhost:'+port);
        });
    }
});
*/