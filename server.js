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

   socket.emit('userName', '#'+Math.floor(Math.random()*16777215).toString(16));
   socket.on('data', function(data){
        socket.emit('data', data)
   });
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
