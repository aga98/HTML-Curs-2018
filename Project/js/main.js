var iid;
var vid = "canyon";

$(document).ready(function(){
	iid = setInterval(switchVideo,15000);

	$("#night").on("change",function(){
    	if($(this).is(':checked')) {
    	    darken();
    	} 
	    else {
	        light();
	    }
	});
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


function darken(){
	$(document.body).css("background-color","#171a21");
	$(".header-country").css("color","white");
	$("section div div").css("background-color","#878787");
}

function light(){
	$(document.body).css("background-color","white");
	$(".header-country").css("color","#545454");
}


