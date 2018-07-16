var slide_place = 1;
var slide_rest = 1;
var places = 3;
var restaurants = 1;

$(document).ready(function(){
	$("#place1").css("display","block");
	$("#rest1").css("display","block");

	$('.carousel').carousel({
        interval: false //set the initial interval
    });
    initMap();
    $("#nextplace").click(function(){
    	$(".place-cont > .place-desc > div").css("display", "none");
    	if(slide_place == places) slide_place = 1;
    	else ++slide_place;
    	var p = "place" + slide_place.toString();
    	if(places != 1){
    		$("#" + p).toggle("slow");
    	}
    	$("#" + p).css("display","block");  	
    });

    $("#prevplace").click(function(){
    	$(".place-cont > .place-desc > div").css("display", "none");
    	if(slide_place == 1) slide_place = places;
    	else --slide_place;
    	var p = "place" + slide_place.toString();
    	if(places != 1){
    		$("#" + p).animate({
    			height: 'toggle'
    		});
    	}
    	$("#" + p).css("display","block");
    });
    $("#nextrest").click(function(){
    	$(".place-cont > .rest-desc > div").css("display", "none");
    	if(slide_place == restaurants) slide_rest = 1;
    	else ++slide_rest;
    	var p = "rest" + slide_rest.toString();
    	if(restaurants != 1){
    		$("#" + p).toggle("slow");
    	}
    	$("#" + p).css("display","block");
    });
    $("#nextrest").click(function(){
    	$(".place-cont > .rest-desc > div").css("display", "none");
    	if(slide_place == 1) slide_rest = restaurants;
    	else --slide_rest;
    	var p = "rest" + slide_rest.toString();
    	if(restaurants != 1){
    		$("#" + p).animate({
    			height: 'toggle'
    		});
    	}
    	$("#" + p).css("display","block");
    });
    
 });

function initMap(){
	var mymap = L.map('map').setView([45.528842, -73.544749], 13);
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYWdhOTgiLCJhIjoiY2pqb2pmbXM4MHRwazN3bGU1c2RwYjEwNiJ9.AiTusF62WVe7FiBxkVq0CA'
	}).addTo(mymap);

	var notre = L.marker([45.504554, -73.555940]).addTo(mymap).bindPopup('NOTRE-DAME BASILICA'),
    mount     = L.marker([45.504004, -73.586849]).addTo(mymap).bindPopup('MOUNT ROYAL'),
    biodome   = L.marker([45.559662, -73.549880]).addTo(mymap).bindPopup('MONTREAL BIODOME'),
    bros      = L.marker([45.505935, -73.555969]).addTo(mymap).bindPopup('BROS PIZZERIA');
}
