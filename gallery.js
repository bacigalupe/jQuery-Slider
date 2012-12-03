$(document).ready(function(){

// variables
var totalImages = $("#gallery > div").length;
var imageWidth = $("#gallery > div:first").outerWidth(true);
var imageHeight = $("#gallery > div:first").outerHeight(true);
var controls = imageHeight/2;
var totalWidth = imageWidth * totalImages;
var begin = "0px";
var end = -1 * (totalWidth - imageWidth);
var speedFade = 500;
var speedSlide = 1000;

// CSS
$("#gallery").width(totalWidth);
$("#gallery-controls").width(imageWidth).css('bottom',controls+'px');
$("#gallery-wrap").width(imageWidth).height(imageHeight);

// fadeIn y fadeOut controles
$("#gallery-wrap").hover(function(){
	$("#gallery-controls").fadeIn(speedFade);
}, function(){
	$("#gallery-controls").fadeOut(speedFade);
	});

// animacion slider fotos
$("#gallery-next").click(function(){
	if ($("#gallery").css('marginLeft') != end+'px' && !$("#gallery").is(":animated")){
			$("#gallery").animate({
				marginLeft: "-="+imageWidth				
				}, speedSlide);
		} 
	});

$("#gallery-prev").click(function(){
	if ($("#gallery").css('marginLeft') != begin && !$("#gallery").is(":animated")){
			$("#gallery").animate({
				marginLeft: "+="+imageWidth				
				}, speedSlide);
		}	
	});
	
});