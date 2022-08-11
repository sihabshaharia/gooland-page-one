jQuery(function ($) {
  'use strict';



  $(".click-lang").niceSelect();
  $(".select-box").niceSelect();
   //::::: preloder js::::::
  $(window).on("load", function () {
    $('.preloder-img').fadeOut();
  });
  // team-item owl-carousel js start //
  $('.coin-price-item').owlCarousel({
    loop: true,
    margin: 28,
    navText: false,
    nav:false,
    responsive: {
      0: {
        items: 1,
      },
      767: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    }
  })

  $('.btn').magnificPopup({
    type: 'iframe'
  });

  


      // scrollbar
      $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
          $('.navbar').addClass('stiky');
        } else {
          $('.navbar').removeClass('stiky');
        }
      })
  
      // scroll top to bottom
      $(window).scroll(function () {
        if ($(this).scrollTop() > 160) {
          $('.scrollUp').fadeIn();
        } else {
          $('.scrollUp').fadeOut();
        }
      })
      $(".scrollUp").click(function () {
        $("html ,body").animate({
          scrollTop: 0
        });
      });
      // :::::: wow js :::::::
      new WOW().init();


}(jQuery));