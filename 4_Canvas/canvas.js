var r = 20;
var width = 300;
var height = 300;
var ctx;
var interval;
var positions = [{x:150, y:30, dx:2, dy:3}];
var i = 0;

function init(){
	var cv = document.getElementById('container');
	ctx = cv.getContext("2d");
	var aux = Math.floor(Math.random()*width+1);
	positions.push({x:aux, y:aux, dx:2, dy:3});
	interval = setInterval(draw,10);
}

function draw(){
	clear();
	for(i = 0; i<positions.length; i++){
		var newx = positions[i].x;
		var newy = positions[i].y;
		var newdx = positions[i].dx;	
		var newdy = positions[i].dy;

		if(newx + r + newdx > width || newx - r + newdx < 0){
			newdx = -newdx;
		}
		if(newy + r + newdy > height|| newy - r + newdy < 0){
			newdy = -newdy;
		}
		newx += newdx;
		newy += newdy;	

		positions[i].x = newx;	
		positions[i].y = newy;	
		positions[i].dx = newdx;	
		positions[i].dy = newdy;	

		if(i == 0) drawBall(newx,newy,"rgb(155,50,56)");
		else drawBall(newx,newy);
	}
}

function clear(){
	ctx.clearRect(0,0,width,height);
}

function drawBall(newx,newy,color = "green"){
	ctx.beginPath();
	ctx.arc(newx,newy,r,0,Math.PI*2,true);
	ctx.fillStyle = color;
	ctx.fill();
}

window.onload = init;