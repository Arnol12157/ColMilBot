$(document).ready(function() {

	

set();

});



function set(){

  $("div.blog-post").hover(
    function() {
        $(this).find("div.content-hide").slideToggle("fast");
    },
    function() {
        $(this).find("div.content-hide").slideToggle("fast");
    }
  );

  $('.flexslider').flexslider({
    prevText: '',
    nextText: ''
  });

  $('.testimonails-slider').flexslider({
    animation: 'slide',
    slideshowSpeed: 5000,
    prevText: '',
    nextText: '',
    controlNav: false
  });
  $('#Container').mixItUp();
  $(".fancybox").fancybox();
}