var snakePos = [{x:0, y:0}];
var fruitPos = {x:0, y:0};
var size = 20 ;
var WIDTH = 500;
var HEIGHT = 500;
var ctx;
var newx;
var newy;
var i;
var parts = 1;
var iid;
var dir = {u:0,d:0,l:0,r:1};
var newpart = false;
var xx;
var yy;

window.onload = function(){
	document.getElementById("play").onclick = intialize;
	window.onkeydown = function(){key(event)};	
}

function intialize(){
	document.getElementById("play").disabled = true;
	document.getElementById("gover").style.zIndex = -1;
	snakePos = [{x:0, y:0}];
	fruitPos = {x:0, y:0};
	parts = 1;
	dir = {u:0,d:0,l:0,r:1};
	newpart = false;
	ctx = document.getElementById('container').getContext("2d");
	updateFruit();
	updateSnake();
	iid = setInterval(update,150);
}

function updateFruit(){
	fruitPos.x = (Math.floor(Math.random()*((WIDTH - size)/size)+1))*size;
	fruitPos.y = (Math.floor(Math.random()*((HEIGHT - size)/size)+1))*size;
	draw(fruitPos.x,fruitPos.y,size,"red");
	updateSnake();
}

function updateSnake(){ 
	if(newpart == true){
		newpart = false;
		for(i = parts-2; i > 0; i--) {
			newx = snakePos[i-1].x;
			newy = snakePos[i-1].y;
			draw(newx,newy,size,"black");
			snakePos[i].x = newx;
			snakePos[i].y = newy;
		}
		snakePos.push({x:xx, y:yy});		
	}
	else{
		for(i = parts-1; i > 0; i--) {
			newx = snakePos[i-1].x;
			newy = snakePos[i-1].y;
			draw(newx,newy,size,"black");
			snakePos[i].x = newx;
			snakePos[i].y = newy;			
		}
	}
	newx = snakePos[0].x;
	newy = snakePos[0].y;
	if(dir.u == 1) newy = snakePos[0].y - size;
	else if(dir.d == 1) newy = snakePos[0].y + size;
	else if(dir.l == 1) newx = snakePos[0].x - size;
	else if(dir.r == 1) newx = snakePos[0].x + size;
	snakePos[0].x = newx;
	snakePos[0].y = newy;
	draw(newx,newy,size,"black");
}

function draw(x,y,size,color){
	ctx.beginPath();
	ctx.rect(x,y,size,size);
	ctx.fillStyle = color;
	ctx.fill();
}


function key(event){
	var key = event.which || event.keyCode;
	if(key == 37) { //left
		dir = {u:0,d:0,l:1,r:0};
	}
	else if(key == 38) { //up
		dir = {u:1,d:0,l:0,r:0};
	}
	else if(key == 39) { //right
		dir = {u:0,d:0,l:0,r:1};
	}
	else if(key == 40) { //down
		dir = {u:0,d:1,l:0,r:0};
	}
}

function update() {
	ctx.clearRect(0,0,WIDTH,HEIGHT);
	if(snakePos[0].x == fruitPos.x && snakePos[0].y == fruitPos.y){
		++parts;
		newpart = true;
		xx = snakePos[parts-2].x;
		yy = snakePos[parts-2].y;
		updateFruit();
	}
	else if(snakePos[0].x > WIDTH || snakePos[0].x < 0 || snakePos[0].y > HEIGHT || snakePos[0].y < 0 || crashes()){
		document.getElementById("gover").style.zIndex = 1;
		clearInterval(iid);		
		document.getElementById("play").disabled = false;
		setTimeout(function(){ alert("GAME OVER"); }, 500);
	}
	else {
		draw(fruitPos.x,fruitPos.y,size,"red");
		updateSnake();
	}
}

function crashes(){
	var posx = snakePos[0].x;
	var posy = snakePos[0].y;
	for(i = 1; i<snakePos.length; ++i){
		if(posx == snakePos[i].x && posy == snakePos[i].y) return true;
	}
	return false;
}