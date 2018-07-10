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
	intialize();
	window.onkeydown = function(){key(event)};
	
}

function intialize(){
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
		for(i = 1; i < parts-1; i++) {
			newx = snakePos[i-1].x;
			newy = snakePos[i-1].y;
			draw(newx,newy,size,"black");
			snakePos[i].x = newx;
			snakePos[i].y = newy;
			if(i == parts-1){
				newpart = false;
				snakePos.push({x:xx, y:yy});
			}	
		}		
	}
	else{
		for(i = 1; i < parts; i++) {
			newx = snakePos[i-1].x;
			newy = snakePos[i-1].y;
			draw(newx,newy,size,"black");
			snakePos[i].x = newx;
			snakePos[i].y = newy;
			if(newpart == true && i == parts-1){
				newpart = false;
				snakePos.push({x:xx, y:yy});
			}			
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
	var x = event.keyCode;
	if(x == 37) { //left
		dir = {u:0,d:0,l:1,r:0};
	}
	else if(x == 38) { //up
		dir = {u:1,d:0,l:0,r:0};
	}
	else if(x == 39) { //right
		dir = {u:0,d:0,l:0,r:1};
	}
	else if(x == 40) { //down
		dir = {u:0,d:1,l:0,r:0};
	}
}

function update() {
	ctx.clearRect(0,0,WIDTH,HEIGHT);
	if(snakePos[0].x == fruitPos.x && snakePos[0].y == fruitPos.y) {
		++parts;
		newpart = true;
		xx = snakePos[parts-2].x;
		yy = snakePos[parts-2].y;
		updateFruit();
	}
	else {
		draw(fruitPos.x,fruitPos.y,size,"red");
		updateSnake();
	}
}