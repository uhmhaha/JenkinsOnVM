var express = require('express');
var http = require('http');
const app = express();
var server = http.createServer(app);

app.get('/', function(req, res){
    res.send('I like IU!06');
});

app.get('/start', function(req, res){
    res.send('start05 page!');
});

app.get('/hello4', function(req, res){
    res.send('hello4');
});

server.listen(3000, '127.0.0.1', function(){
    console.log('Server listen on port!'+ server.address().port);
});
