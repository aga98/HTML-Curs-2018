$().ready(function(){
	var id = 1;
	$.get("https://40.118.8.76/pokemons/" + id,
		function(data){
			$("#code").text(data.code);
		}, "json")
	.always(function(){
		alert($("#name").text());
	});

});