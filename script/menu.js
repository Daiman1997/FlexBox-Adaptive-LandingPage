$(function() {
	var link = $('.list');
	var menu = $('.m-menu');
	var close = $('.close-menu');
	link.on('click', function(event) {
		event.preventDefault();
		menu.toggleClass('m-menu__active');
	});
	close.on('click', function(event) {
		event.preventDefault();
		menu.toggleClass('m-menu__active');
	});
});