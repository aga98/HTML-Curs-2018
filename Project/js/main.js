var iid;
var vid = "canyon";

$(window).("load", function(){
	iid = setInterval(switchVideo,1000);
});

function switchVideo(){
	if(vid == "canyon"){
		vid = "niagara";
			$("#canyon").css(display,"none");
			$("#niagara").css(display,"initial");
	}
	else{
		vid = "canyon";
			$("#niagara").css(display,"none");
			$("#canyon").css(display,"initial");
	}
}