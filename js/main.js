$(document).ready(function(){
	
	$(".dropdown-button").dropdown();
	$(".button-collapse").sideNav();
	$(".slider").slider({
		indicators: false,
		interval: 3000//milesima de segundos
	});
	//$('#modal1').openModal();
	//$('#modal1').closeModal();
	$('.modal-trigger').leanModal();
	$('.parallax').parallax();
	$('ul.tabs').tabs();
});