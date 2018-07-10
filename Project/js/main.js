var iid;
var vid = "chute";
var video;
var source;

window.onload = function(){
	video = document.getElementById('background');
	source = document.createElement('source');
	iid = setInterval(switchVideo,1000);
}

function switchVideo(){
	if(vid == "chute"){
		vid = "niagara";
			source.setAttribute('src', '../media/niagara.mp4');
			video.appendChild(source);
			video.play();
	}
	else{
		vid = "chute";
			source.setAttribute('src', '../media/canyon.mp4');
			video.appendChild(source);
			video.play();
	}
}