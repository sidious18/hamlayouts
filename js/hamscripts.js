jQuery(document).ready(function($) {
	if($(document).outerWidth() <= 768){
		$(".left-season-link img").css("height",$(".left-season-link img").css("width"));
		$(".right-season-gallery img").css("height",$(".right-season-gallery img").css("width"));
	}
});
$( window ).resize(function() {
	if($(document).outerWidth() <= 768){
		$(".left-season-link img").css("height",$(".left-season-link img").css("width"));
		$(".right-season-gallery img").css("height",$(".right-season-gallery img").css("width"));
	}
	else{
		$(".left-season-link img").css("height","auto");
		$(".right-season-gallery img").css("height","auto");
	}
});