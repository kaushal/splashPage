var app = require('express')()
    , server = require('http').createServer(app)
    , io = require('socket.io')

app.get('/', function(req, res){
    res.sendfile(__dirname + '/phone.html')
});

app.get('/display', function(req, res){
    res.sendfile(__dirname + '/display.html')
});

server.listen(3000);
