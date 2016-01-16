

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

    $('.navbar-collapse').collapse('hide');

    
});
$(document).ready(function(){
    //Set Active Class on Current Page Navbar
    // place on div with '.navbarActive' class
    // page="FILENAME.html"
    // for multiple pages:
    //    page="FILE1.html,FILE2.html,FILE3.html"
    pageName = document.location.pathname.match(/[^\/]+$/)[0]; 
    $('.navbarActive').each(function(){
        var element = $(this);
        pageString = element.attr("page");
        pageArray = pageString.split(",");
       
        for(i=0;i<pageArray.length;i++){
            if(pageArray[i] == pageName){
                element.addClass("link-active")
                break;
            }
        }
    });
    
    
    //$('[page="'+pageName+'"]').addClass("link-active");
    
});