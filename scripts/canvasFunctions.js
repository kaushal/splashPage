$(document).ready(function(){
    $displayCanvas = $('#displayCanvas');
    var xPos, yPos;
    $displayCanvas.click(function(e){
        var offset = $(this).offset();
        var xPos = e.clientX;
        var yPos = e.clientY;
        console.log("x: " + xPos + "y: " + yPos);
    });
});
