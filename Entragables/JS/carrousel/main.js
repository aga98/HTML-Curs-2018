var tid;
var color = "green"; 
window.onload = function(){
	tid = setInterval(changeright,2000);
	document.getElementById("right").onclick = function(){
		clearInterval(tid);
		changeright();
		tid = setInterval(changeright,2000);
	}
	document.getElementById("left").onclick = function(){
		clearInterval(tid);
		changeleft();
		tid = setInterval(changeright,2000);
	}
}

function changeright(){
	if(color == "green"){
		color = "blue";
		document.getElementById('photo').src = "blue.png";
		document.getElementById('bl').style.backgroundColor = "rgb(37,107,173)";
		document.getElementById('gr').style.backgroundColor = "#DBDBDB";
		document.getElementById('re').style.backgroundColor = "#DBDBDB";

	}
	else if(color == "blue"){
		color = "red";
		document.getElementById('photo').src = "red.png";
		document.getElementById('bl').style.backgroundColor = "#DBDBDB";
		document.getElementById('gr').style.backgroundColor = "#DBDBDB";
		document.getElementById('re').style.backgroundColor = "rgb(181,41,41)";
	}
	else{
		color = "green"
		document.getElementById('photo').src = "green.png";
		document.getElementById('bl').style.backgroundColor = "#DBDBDB";
		document.getElementById('gr').style.backgroundColor = "rgb(0,134,103)";
		document.getElementById('re').style.backgroundColor = "#DBDBDB";
	}
}

function changeleft(){
	if(color == "green"){
		color = "red";
		document.getElementById('photo').src = "red.png";
		document.getElementById('bl').style.backgroundColor = "#DBDBDB";
		document.getElementById('gr').style.backgroundColor = "#DBDBDB";
		document.getElementById('re').style.backgroundColor = "rgb(181,41,41)";
	}
	else if(color == "blue"){
		color = "green";
		document.getElementById('photo').src = "green.png";
		document.getElementById('bl').style.backgroundColor = "#DBDBDB";
		document.getElementById('gr').style.backgroundColor = "rgb(0,134,103)";
		document.getElementById('re').style.backgroundColor = "#DBDBDB";

	}
	else{
		color = "blue"
		document.getElementById('photo').src = "blue.png";
		document.getElementById('bl').style.backgroundColor = "rgb(37,107,173)";
		document.getElementById('gr').style.backgroundColor = "#DBDBDB";
		document.getElementById('re').style.backgroundColor = "#DBDBDB";
	}
}
