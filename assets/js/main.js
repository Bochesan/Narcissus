$(document).ready(function(){

	$('#main_slider').slick();

	$('.menu_btn').click(function(){
		$('header .menu').addClass('active');
		$('header .top_line').addClass('active');
		return false;
	});

	$('.close_menu').click(function(){
		$('header .menu').removeClass('active');
		$('header .top_line').removeClass('active');
		return false;
	});

	$(window).scroll(function(){
		if ($(window).scrollTop() > 400) {
			$('.go_up').addClass('active');
		}
		else $('.go_up').removeClass('active');
	});

	$('.go_up').click(function(){
		$('html').animate({scrollTop:0}, 500);
		return false;
	});

	fixMenu();

	$(window).scroll(function(){
		fixMenu();
	});

});

function fixMenu() {
	if ($(window).width() > 1140) {
		if ($(window).scrollTop() > 400) {
			$('header .menu').addClass('active');
			$('header .top_line').addClass('active');
		}
		else $('header .menu').removeClass('active');
		$('header .top_line').removeClass('active');
	}
	else return false;
}