var snakePos = {x:0, y:0};
var fruitPos = {x:0, y:0};
var size = 20 ;
var WIDTH = 500;
var HEIGHT = 500;
var ctx;

var parts = 1;
var iid;
var dir = {u:0,d:0,l:0,r:0};

function intialize(){
	ctx = document.getElementById('container').getContext("2d");
	updateFruit();
	updateSnake();
}

function updateFruit(){
	fruitPos.x = (Math.floor(Math.random()*((WIDTH - size)/size)+1))*size;
	fruitPos.y = (Math.floor(Math.random()*((HEIGHT - size)/size)+1))*size;
	draw(fruitPos.x,fruitPos.y,size,"red");
	updateSnake();
}

function updateSnake(){
	draw(snakePos.x,snakePos.y,size,"black");
}

function draw(x,y,size,color){
	ctx.beginPath();
	ctx.rect(x,y,size,size);
	ctx.fillStyle = color;
	ctx.fill();
}

window.onload = function(){
	intialize();
}