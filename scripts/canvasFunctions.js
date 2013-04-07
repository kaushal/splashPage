$(document).ready(function(){
    $displayCanvas = $('#displayCanvas');
    var xPos, yPos;
    $displayCanvas.click(function(e){
        var offset = $(this).offset();
        var xPos = e.clientX;
        var yPos = e.clientY;
        alert("x: " + xPos + "y: " + yPos);
    });
});
