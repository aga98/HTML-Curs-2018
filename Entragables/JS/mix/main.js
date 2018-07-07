var min = 0;
var sec = 0;
var color = "green";
window.onload = function(){
	setInterval(plus_second,1000);
	setInterval(changeright,5000);
	document.getElementById('name').onchange = function(){
		var n =  document.getElementById('name').value;
		document.getElementById('hello').innerHTML = "Hello " + n;
	}
}

function changeright(){
	if(color == "green"){
		color = "blue";
		document.getElementById('photo').style.backgroundImage = "url('blue.png')";
	}
	else if(color == "blue"){
		color = "red";
		document.getElementById('photo').style.backgroundImage = "url('red.png')";
	}
	else{
		color = "green"
		document.getElementById('photo').style.backgroundImage = "url('green.png')";
	}
}

function plus_second() {
	++sec;
	if(sec == 60){
		sec = 0;
		++min;
	}
	if(sec < 10) document.getElementById('sec').innerHTML = "0" + sec;
	else document.getElementById('sec').innerHTML = sec;
	if(min < 10) document.getElementById('min').innerHTML = "0" + min;
	else document.getElementById('min').innerHTML = min;
}

