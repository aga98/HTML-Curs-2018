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
    $("#nextplace").click(function(){
    	$(".place-cont > .place-desc > div").css("display", "none");
    	if(slide_place == places) slide_place = 1;
    	else ++slide_place;
    	var p = "place" + slide_place.toString();
    	if(places != 1){
    		$("#" + p).animate({
    			height: 'toggle'
    		});
    	}
    	$("#" + p).css("display","block");  	
    });

    $("#prevplace").click(function(){
    	$(".place-cont > .place-desc > div").css("display", "none");
    	if(slide_place == 1) slide_place = places;
    	else --slide_place;
    	var p = "place" + slide_place.toString();
    	$("#" + p).css("display","block");
    });
    $("#nextrest").click(function(){
    	$(".place-cont > .rest-desc > div").css("display", "none");
    	if(slide_place == restaurants) slide_rest = 1;
    	else ++slide_rest;
    	var p = "rest" + slide_rest.toString();
    	if(restaurants != 1){
    		$("#" + p).animate({
    			height: 'toggle'
    		});
    	}
    	$("#" + p).css("display","block");
    });
    $("#nextrest").click(function(){
    	$(".place-cont > .rest-desc > div").css("display", "none");
    	if(slide_place == 1) slide_rest = restaurants;
    	else --slide_rest;
    	var p = "rest" + slide_rest.toString();
    	$("#" + p).css("display","block");
    });

 });
