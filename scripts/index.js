$(document).ready(function() {
  $('.slider-echookers').slick({
    autoplay: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    variableWidth: true,
    adaptiveHeight: false,
    responsive: [{
      breakpoint: 500,
      settings: {
        dots: false,
        arrows: false,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }]
  });
});

// $(document).ready(function() {
//   console.log('Initialising Sliders');
//   $('.slider-echookers').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     asNavFor: '.slider-echookers-nav'
//   });
//   $('.slider-echookers-nav').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     asNavFor: '.slider-echookers',
//     dots: true,
//     centerMode: true,
//     focusOnSelect: true
//   });
// });