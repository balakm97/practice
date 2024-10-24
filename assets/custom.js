$(document).ready(function() {
  $(".home-product-section .custom-product-slider").slick({
     slidesToShow: 2,
     loop:true,
     infinite:true,
     centerMode: true,
     centerPadding: '50px',
     slidesToScroll: 1,
     autoplay:false,
     autoplaySpeed: 2000,
     arrows:false,
     dots:false,
     responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '30px',
        },
      },
    ],
  });
});