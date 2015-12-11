

// Shrink the Navbar on Scroll
// Author: hudson
// Date: 12 5 15
$(window).scroll(function() {
  if ($(document).scrollTop() > 100) {
    $('nav').addClass('shrink');
    $('.csh-logo').addClass('logo-shrink');
  } else {
    $('nav').removeClass('shrink');
    $('.csh-logo').removeClass('logo-shrink');
  }
});

$('.navbar').on('show.bs.collapse', function(){
        $('.nav > .dropdown > ul').removeClass('dropdown-menu');
        
    
});
$('.navbar').on('hide.bs.collapse', function(){
        $('.nav > .dropdown > ul').addClass('dropdown-menu');
        
    
});
$(window).resize(function(){
    if($(window).width() > 767){
        $('.nav > .dropdown > ul').addClass('dropdown-menu');
    }
    else if($(window).width() <= 767){
        $('.nav > .dropdown > ul').removeClass('dropdown-menu');
    }
    
})