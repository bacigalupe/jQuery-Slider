$(document).ready(function(){

// variables
var totalImages = $("#gallery > img").length;
var imageWidth = $("#gallery > img:first").outerWidth(true);
var imageHeight = $("#gallery > img:first").outerHeight(true);
var controlsHeight = imageHeight/2;
var totalWidth = imageWidth * totalImages;
var first = '0px';
var second = -1 * imageWidth;
var last = -1 * (totalWidth - imageWidth);
var penultimate = -1 * (totalWidth - 2 * imageWidth);
var velocidadFade = 500;
var velocidadSlide = 1000;
var efectoEasing = 'easeOutBack'; // http://easings.net/es

// CSS
$("#gallery").width(totalWidth);
$("#gallery-controls").width(imageWidth).css('bottom',controlsHeight+'px');
$("#gallery-wrap").width(imageWidth).height(imageHeight);
$("#caption").width(imageWidth);

// fadeIn & fadeOut controles
$("#gallery-wrap").hover(function(){
	$("#gallery-controls").fadeIn(velocidadFade);
}, function(){
	$("#gallery-controls").fadeOut(velocidadFade);
	});

// mostrar texto caption

// animacion fotos: slide & shake
$("#gallery-next").click(function(){
	if ($("#gallery").css('marginLeft') != last+'px' && !$("#gallery").is(":animated")){
			if ($("#gallery").css('marginLeft') == penultimate+'px' && !$("#gallery").is(":animated")){
				$("#gallery").animate({marginLeft: "-="+imageWidth}, velocidadSlide, 'easeOutExpo'); 
			} else {
				$("#gallery").animate({marginLeft: "-="+imageWidth}, velocidadSlide, efectoEasing);
			}
		} 
	});

$("#gallery-prev").click(function(){
	if ($("#gallery").css('marginLeft') != first && !$("#gallery").is(":animated")){
		if ($("#gallery").css('marginLeft') == second+'px' && !$("#gallery").is(":animated")){
			$("#gallery").animate({marginLeft: "+="+imageWidth}, velocidadSlide, 'easeOutExpo');
		} else {
			$("#gallery").animate({marginLeft: "+="+imageWidth}, velocidadSlide, efectoEasing);
		}	
	}
	});
	
});