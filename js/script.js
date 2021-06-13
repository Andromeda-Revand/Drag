var dragV;

function move(id){
    var element = document.getElementById("kotak");
    element.style.position = "absolute";
    element.onmousedown = function(){
        dragV = element
    }
}

document.onmousemove = function(e){
    var x = e.pageX;
    var y = e.pageY;

    dragV.style.left = x + "px";
    dragV.style.top = y + "px";
}

