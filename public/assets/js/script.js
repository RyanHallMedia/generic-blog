$(document).ready(function(){
	var hitEvent = 'ontouchstart' in document.documentElement ? 'touchstart' : 'click'; //for getting the correct event


  //sets animations on pageload
	setTimeout(function(){
		$('header').addClass('animated fadeInDown');
		$('header').removeClass("preanimate");
	}, 100);
	setTimeout(function(){
		$('.header-main h1').addClass('animated fadeInLeft');
		$('.header-main h1').removeClass("preanimate");
	}, 900);
	setTimeout(function(){
		$('.header-interior h1').addClass('animated fadeInRight');
		$('.header-interior h1').removeClass("preanimate");
	}, 900);
	setTimeout(function(){
		$('.header-interior .header-background').addClass('animated fadeInLeft');
		$('.header-interior .header-background').removeClass("preanimate");
	}, 900);
	setTimeout(function(){
		$('.header-main h4').addClass('animated fadeInLeft');
		$('.header-main h4').removeClass("preanimate");
	}, 1000);
	setTimeout(function(){
		$('.header-interior h6').addClass('animated fadeInRight');
		$('.header-interior h6').removeClass("preanimate");
	}, 1000);
	setTimeout(function(){
		$('.header-interior .author').addClass('animated fadeInRight');
		$('.header-interior .author').removeClass("preanimate");
	}, 1100);
	setTimeout(function(){
		$('.header-main .line').addClass('animated fadeInUp');
		$('.header-main .line').removeClass("preanimate");
	}, 1600);
	setTimeout(function(){
		$('.header-main .scroll').addClass('animated fadeIn');
		$('.header-main .scroll').removeClass("preanimate");
	}, 2000);
	setTimeout(function(){
		$('nav').addClass('animated fadeInDown');
		$('nav').removeClass("preanimate");
	}, 2200);
	setTimeout(function(){
		$('.copy').addClass('animated fadeIn');
		$('.copy').removeClass("preanimate");
	}, 2200);


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
