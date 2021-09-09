$(document).ready(() => {
    let slider = $("#slider");
    if (slider.length) {
        slider.slick({
            dots: true,
            autoplay: true,
            autoplaySpeed: 5000,
            mobileFirst: true,
            swipe: true,
        });
    }
    // Setup carousel scroll-down button click event
    let carouselsdb = $("#carousel-scroll-down-button");
    let scrollTopOffset = 1;
    carouselsdb.on("click", () => {
        $("html, body").animate({ scrollTop: slider.find("img").height() + scrollTopOffset - $("nav").outerHeight() }, "slow");
        carouselsdb.blur();
    });

    // Position carousel scroll-down button
    let carouselsdbOffset = {X: -7, Y: -35};
    $(window).on("scroll",  () => {
        let sliderBottom = slider.height() + slider.offset().top;
        let windowBottom = $(window).scrollTop() + $(window).height();
        if ($(window).scrollTop() > sliderBottom) {
            carouselsdb.css("visibility", "hidden");
        } else {
            if(windowBottom < sliderBottom){
                carouselsdb.css("transform", `translate3d(${-carouselsdb.width()/2 + carouselsdbOffset.X}px, ${windowBottom-carouselsdb.height() + carouselsdbOffset.Y}px,0px)`);
            } else{
                carouselsdb.css("transform", `translate3d(${-carouselsdb.width()/2 + carouselsdbOffset.X}px, ${slider.height()-carouselsdb.height() + carouselsdbOffset.Y}px, 0px)`);
            }
            carouselsdb.css("visibility", "visible");
        }
    }).scroll();
    $(window).on("load resize focus blur",()=>$(window).scroll());
});
