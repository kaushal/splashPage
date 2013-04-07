var express = require('express')
    , app = express()
    , server = require('http').createServer(app)
    , io = require('socket.io').listen(server)
    , xPos = 0
    , yPos = 0

app.use(express.static('scripts'))
app.get('/', function(req, res){
    res.sendfile(__dirname + '/phone.html')
});

app.get('/display', function(req, res){
    res.sendfile(__dirname + '/display.html')
});



io.sockets.on('connection', function(socket){
   socket.on('xPos', function(value) {
       xPos = value
    console.log('setting x value: ' + value) 
   });
   socket.on('yPos', function(value){
        ypos = value;
        console.log('setting y value: ' + value)
   });
});
server.listen(3000);
