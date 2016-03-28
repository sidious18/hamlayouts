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

//init facebook
window.fbAsyncInit = function() {
    FB.init({
      appId      : '1533695430259772',
      xfbml      : true,
      version    : 'v2.5'
    });
};
(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

//init twitter
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

//init google-maps
var hamCenter=new google.maps.LatLng(35.427433,-77.662727);
function initialize() {
	  var mapProp = {
	    center:new google.maps.LatLng(35.416557,-77.688734),
	    zoom:10,
	    mapTypeId:google.maps.MapTypeId.ROADMAP,
	    scrollwheel: false
	  };
	  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
	  var marker=new google.maps.Marker({
	  	position:hamCenter
	  });

	marker.setMap(map);
	}
	google.maps.event.addDomListener(window, 'load', initialize);
