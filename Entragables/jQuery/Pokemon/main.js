$().ready(function(){
	var id = 1;
	$.get("https:// 40.118.8.76/pokemons/" + id,
		function(data){
			$("#name").text(data.name);
			$("#eye").html(data.films[1]);
		}, "json")
	.always(function(){
		alert($("#name").text());
	});

});