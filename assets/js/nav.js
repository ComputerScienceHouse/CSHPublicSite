$(document).ready(() => {
    if ($('nav').length) {
        $(window).scroll(() => {
            if ($(window).width() < 1000) { // don't condense nav on smaller screens
                $('nav').first().removeClass('condensed');
                return;
            }
            let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (currentScroll > 150) {
                $('nav').first().addClass('condensed');
            } else {
                $('nav').first().removeClass('condensed');
            }
        });
    }
});
