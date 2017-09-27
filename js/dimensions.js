
$(document).ready(function(){
    resizeApp();

    $(window).resize(function() {
        resizeApp();
    });
	
});

function resizeApp() {
    $height = $(window).height()-4;
    $('body div#menu').height($height-40);
	$("body div#container").height($height-20);
}