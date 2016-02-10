// Tour Image Carousel JS

$.get("resources/templates/_carouselPrototype.html", function (data) {
        $.carouselPrototype = data;

    });
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
    var containerElement = $('#carouselImages');
    $('.tourTextActive').hide();
    $('.tourTextActive').removeClass('tourTextActive');

    if(room == "server"){
        imageHTML = $.server;
        
        // Show Photosphere container
        containerElement = $('#photosphere-container');
        containerElement.show();

        // Photosphere, remove carousel
        // Part of the workaround for the carousel bug (see below)
        $('.carousel').remove();
    } else {
        // Hide photosphere container
        $('#photosphere-container').hide();

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
        else if(room == "project"){
               imageHTML = $.project; 

        }
        else if(room == "dorm"){
                imageHTML = $.dorm;

        }
    }
    
    $('.csh-active').removeClass('csh-active');
    $("#"+room+"Text").show();
    $("#"+room+"Text").addClass("tourTextActive");

    // If the carousel doesn't exist in the DOM, add it
    // Workaround for this bug: https://github.com/angular-ui/bootstrap/issues/1513
    if (room !== 'server' && $('.carousel').length == 0) {
        $('.image-container').append($.carouselPrototype.replace('{{images}}', imageHTML));
        $('.carousel').carousel();
    } else {
        containerElement.html(imageHTML);
    }
    $('#'+room).addClass('csh-active');
    
    
}
