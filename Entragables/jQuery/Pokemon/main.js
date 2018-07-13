var id = 1;
var i,j;
var x = "";
var y = "";
$().ready(function(){

	$("#prev").prop("disabled", true);
	getinfo();
	$("#next").click(function(){
		if(id+1 == 6) $(this).prop("disabled", true);
		else $("#prev").prop("disabled", false);
		++id;	
		getinfo();		
	});
	$("#prev").click(function(){
		if(id-1 == 1) $(this).prop("disabled", true);		 
		else $("#next").prop("disabled", false);			
		--id;
		getinfo();
	});
	$("#search").click(function(){
		search();
	});
});


function getinfo(){
		$.get("http://40.118.8.76/pokemons/" + id,
		function(data){
			clear();
			$("#code").text(data.num);
  			$("#normal_sprite").append("<img src=" + data.images[0].front +">");
			$("#shiny_sprite").append("<img src=" + data.images[1].front_shiny +">");
			$("#name").text(data.name);
			for(i = 0; i < data.types.length; i++){
				x += data.types[i].type.name + "<br>";
			}
			$("#type").html(x);
			for(j in data.moves.HM){
				y += data.moves.HM[j] + "<br>";
			}
			if(y == "") $("#hm").html("none");
			else $("#hm").html(y);			
	 	}, "json");
}

function clear(){
	x = "";
	y = "";
	$("#code").text("");
	$("#normal_sprite").text("");
	$("#shiny_sprite").text("");
	$("#name").text("");
}

function search(){
	var inp = $("#text").val();
	if(inp == 1 || inp == "bulbasaur"){
		$("#prev").prop("disabled", true);
		$("#next").prop("disabled", false);
	} 
	else if(inp == 60 || inp == "polywag"){
		$("#next").prop("disabled", true);
		$("#prev").prop("disabled", false);
	} 
	var idnum;
	var idname;
	var existsnum = false;
	var existsname = false;
	$.get("http://40.118.8.76/pokemons/?num=" + inp,
		function(pok){
			if(pok.length != 0){
				idnum = pok[0].id;
				existsnum = true;
				id = idnum;
				getinfo();					
			} 
			else{
				$.get("http://40.118.8.76/pokemons/?name=" + inp,
					function(pok){
						if(pok.length != 0){						
							existsname = true;
							idname = pok[0].id;
						} 
						if(existsname == true){
							id = idname;
							getinfo();
						}
						else alert("POKEMON NOT FOUND");
	 			}, "json"); 	
			}		
	}, "json");
}