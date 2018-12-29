$(function() {

	//configuration
	var animationSpeed = 1500;
	var pauseTime = 4500;
	var currentSlide = 1;
	var slideWidth = $('#reviews').width();

	//cashing the dom
	var $slideShow = $('#slideshow');
	var $slides = $slideShow.find('.slides');
	var $slide = $slides.find('.slide');

	var interval;

	if ($(window).width() < 768) {
		function startSlider(){
			interval = setInterval(function() {
				$slides.animate({'margin-left': '-=100vw'}, animationSpeed, function() {
					currentSlide++
					if (currentSlide === $slide.length) {
							currentSlide = 1;
							$slides.css('margin-left', 0);
					}
				});
			}, pauseTime);
		};

		function pauseSlider() {
			clearInterval(interval);
		};

		$slideShow.on('mouseenter', pauseSlider).on('mouseleave', startSlider);

		startSlider();
	}
	else {

		function startSlider(){
			interval = setInterval(function() {
				$slides.animate({'margin-left': '-=50vw'}, animationSpeed, function() {
					currentSlide++
					if (currentSlide === $slide.length) {
							currentSlide = 1;
							$slides.css('margin-left', 0);
					}
				});
			}, pauseTime);
		};

		function pauseSlider() {
			clearInterval(interval);
		};

		$slideShow.on('mouseenter', pauseSlider).on('mouseleave', startSlider);

		startSlider();

		$("div.about-box a").attr("href", "#dan-large-box")
	}


	// smooth scroll
	$('a[href^="#"]').on('click', function(event) {

    	var target = $(this.getAttribute('href'));
    	
    	if( target.length ) {
        	event.preventDefault();
        	$('html, body').stop().animate({
            	scrollTop: target.offset().top
        	}, 1000);
    	}
	});

});