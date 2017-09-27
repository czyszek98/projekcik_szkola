$(document).ready(function(){

$("#tools-window").draggable();
$("#tools-window").draggable("disable");
$( "#tools-window" ).draggable({
  containment: "window"
});

		$("#move").mouseenter(function(){

			$("#tools-window").draggable("enable");
});
$("#move").mouseleave(function(){

	$("#tools-window").draggable("disable");

});

});
