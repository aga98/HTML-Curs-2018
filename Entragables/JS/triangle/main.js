var id;
var id2;
var id3;
var pos;
var elem; 
window.onload = function(){
	id = setInterval(move1,2);
	pos = 0;
	elem = document.getElementById('im');
}


function move1(){
	if (pos == 700) {
        clearInterval(id);
        id2 = setInterval(move2,1);
    } 
    else {
        pos++; 
        elem.style.top = pos + 'px'; 
        elem.style.left = 2.4*pos + 'px'; 
    }
}

function move2(){
	if (pos == 0) {
        clearInterval(id2);
        pos = 1680;
        id3 = setInterval(move3,1);
    } 
    else {
        pos--; 
        elem.style.top = pos + 'px'; 
    }
}


function move3(){
	if (pos == 0) {
        clearInterval(id3);
        id = setInterval(move1,1);
    } 
    else {
        pos--; 
        elem.style.left = pos + 'px'; 
    }
}