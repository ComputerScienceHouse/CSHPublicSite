$(document).ready(() => {
    if ($('#slider').length) {
        $('#slider').slick({
            dots: true,
            autoplay: true,
            autoplaySpeed: 5000,
            mobileFirst: true,
            swipe: true,
        });
    }
});
