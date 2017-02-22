$(document).ready(function(){
	var hitEvent = 'ontouchstart' in document.documentElement ? 'touchstart' : 'click'; //for getting the correct event

	// for animating nav
	var nav = $(".startnav");
	$(window).scroll(function() {
			var $height = $('header').height() - $('.info').height();
			var scroll = $(window).scrollTop();

			if (scroll >= $height) {
					nav.addClass("endnav");
			} else {
					nav.removeClass("endnav");
			}
	});


	//mobile nav
	$('.navbutton').on(hitEvent, function() {
	    $('.side-nav').toggleClass('nav-open');
			$('.navbutton').toggleClass('nav-open');
			$('.startnav').toggleClass('nav-open');
	});
	//mobile nav
	$('.mobilenav li a').on(hitEvent, function() {
	    $('.side-nav').toggleClass('nav-open');
			$('.navbutton').toggleClass('nav-open');
			$('.startnav').toggleClass('nav-open');
	});
	//closes mobile nav on escape key hit
	$(document).keyup(function(e) {

			if(e.keyCode=== 27) {
	        $('.navbutton.nav-open').click();
	    }
	});



	//work section height
	var limit1 = $('.one .lower').height() + $('.one h4').height();
	$('.workinfo.one').height(limit1);

	var limit12 = $('.one h4').height() + 10;
	$('.one .lower').css("top", limit12);


	//work section height
	var limit2 = $('.two .lower').height() + $('.two h4').height();
	$('.workinfo.two').height(limit2);

	var limit22 = $('.two h4').height() + 10;
	$('.two .lower').css("top", limit22);



	//work section height
	var limit3 = $('.three .lower').height() + $('.three h4').height();
	$('.workinfo.three').height(limit3);

	var limit32 = $('.three h4').height() + 10;
	$('.three .lower').css("top", limit32);



	//work section height
	var limit4 = $('.four .lower').height() + $('.four h4').height();
	$('.workinfo.four').height(limit4);

	var limit42 = $('.four h4').height() + 10;
	$('.four .lower').css("top", limit42);



	//work section height
	var limit5 = $('.five .lower').height() + $('.five h4').height();
	$('.workinfo.five').height(limit5);

	var limit52 = $('.five h4').height() + 10;
	$('.five .lower').css("top", limit52);






  //sets animations on pageload
	setTimeout(function(){
		$('.bigtext h1').addClass('animated fadeIn');
		$('.bigtext h1').removeClass("preanimate");
	}, 300);
	setTimeout(function(){
		$('.linediv').addClass('animated fadeInDown');
		$('.linediv').removeClass("preanimate");
	}, 600);
	setTimeout(function(){
		$('.is-overlay').addClass('animated border');
		$('.is-overlay').removeClass("preanimate");
	}, 900);
	setTimeout(function(){
		$('section').addClass('borders');
	}, 900);
	setTimeout(function(){
		$('.info h2').addClass('animated fadeIn');
		$('.info h2').removeClass("preanimate");
	}, 1400);
	setTimeout(function(){
		$('.info p').addClass('animated fadeIn');
		$('.info p').removeClass("preanimate");
	}, 1800);
	setTimeout(function(){
		$('.info a').addClass('animated fadeIn');
		$('.info a').removeClass("preanimate");
	}, 2000);
	setTimeout(function(){
    $('.nav ul').addClass('animated fadeInDown');
		$('.nav ul').removeClass("preanimate");
	}, 2400);
	setTimeout(function(){
		$('.email span').addClass('animated fadeInRight');
		$('.email span').removeClass("preanimate");
	}, 2400);
	setTimeout(function(){
		$('.nav-group .navigation').addClass('animated fadeInDown');
		$('.nav-group .navigation').removeClass("preanimate");
	}, 2800);
	setTimeout(function(){
		$('.linedown').addClass('animated fadeInDown');
		$('.linedown').removeClass("preanimate");
	}, 3600);
	setTimeout(function(){
		$('.form-set').addClass('animated fadeIn');
		$('.form-set').removeClass("preanimate");
	}, 3400);


  //animations on scroll
  var appear = $(window).height() - 50;
  $(window).scroll(function() {
    $('.workgrid h2').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();

      if (imagePos < topOfWindow+appear) {
        $(this).addClass("fadeIn animated");
        $(this).removeClass("preanimate");
      } else {
        $(this).removeClass("fadeIn animated");
        $(this).addClass("preanimate");
      }
    });
  });

});
