var iid;
var vid = "canyon";

$(document).ready(function(){
	iid = setInterval(switchVideo,15000);
});

function switchVideo(){
	if(vid == "canyon"){
		vid = "niagara";
			$("#canyon").css("display","none");
			$("#niagara").css("display","initial");
	}
	else{
		vid = "canyon";
			$("#niagara").css("display","none");
			$("#canyon").css("display","initial");
	}
}