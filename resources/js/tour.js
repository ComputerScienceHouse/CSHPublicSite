// Tour Image Carousel JS

$.get("resources/templates/_loungeCarousel.html", function (data) {
        $.lounge = data;
    
        
    });
    $.get("resources/templates/_softwareCarousel.html", function (data) {
        $.software = data;
        
    });
    $.get("resources/templates/_libraryCarousel.html", function (data) {
        $.library = data;
        
    });
    $.get("resources/templates/_userCarousel.html", function (data) {
        $.user = data;
        
    });
    $.get("resources/templates/_conferenceCarousel.html", function (data) {
        $.conference = data;
        
    });
    $.get("resources/templates/_serverCarousel.html", function (data) {
        $.server = data;
        
    });
    $.get("resources/templates/_projectCarousel.html", function (data) {
        $.project = data;
        
    });
    $.get("resources/templates/_dormCarousel.html", function (data) {
        $.dorm = data;
        
    });

// Switch image in carousel by room
// Param: room - string - room name to switch to
// Return: None
function switchImage(room){
    var imageHTML;
    $('.tourTextActive').hide();
    $('.tourTextActive').removeClass('tourTextActive');
    if(room == "lounge"){
        imageHTML = $.lounge;

    }
    else if(room == "software"){
            imageHTML = $.software;

    }
    else if(room == "library"){
            imageHTML = $.library;

    }
    else if(room == "user"){
            imageHTML = $.user;

    }
    else if(room == "conference"){
            imageHTML = $.conference;

    }
    else if(room == "server"){
            imageHTML = $.server;

            // Photosphere instead of carousel, hide controls
            $('.carousel-control').hide();

    }
    else if(room == "project"){
           imageHTML = $.project; 

    }
    else if(room == "dorm"){
            imageHTML = $.dorm;

    }
    $('.csh-active').removeClass('csh-active');
    $("#"+room+"Text").show();
    $("#"+room+"Text").addClass("tourTextActive");
    $('#carouselImages').html(imageHTML);
    $('#'+room).addClass('csh-active');
    
    
    
    
}
