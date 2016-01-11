var express = require('express');
var app = express();
var http = require('http');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/cemete*', function(req, res){
    res.redirect('/')
    //res.send('<h1>Hello world</h1>');
});

app.get('/zombie*', function(req, res){
    res.redirect('/')
    //res.send('<h1>Hello world</h1>');
});

//if you have "page" directory and you want to use localhost:3000/index.html adress (index from page directory):
app.use(express.static('./'));
//if you have multiple directories, use localhost:3000/page/index.html and something like below:
//app.use('/page', express.static('page'));

app.listen(3000, function(){
    console.log('listening on *:3000');
});