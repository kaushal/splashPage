$(document).ready(function(){
    $displayCanvas = $('#displayCanvas');
    var xPos;
    var yPos;
    $displayCanvas.click(function(e){
        var socket = io.connect('/')


        var offset = $(this).offset();
        var xPos = e.clientX;
        var yPos = e.clientY;
        
        socket.emit('xPos', xPos);
        socket.emit('yPos', yPos);

        console.log("x: " + xPos + "y: " + yPos);
    });
});
