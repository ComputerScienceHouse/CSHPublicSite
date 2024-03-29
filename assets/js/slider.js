const SCROLL_ANIMATION_DURATION = 1000;
const CAROUSEL_SCROLL_DOWN_BUTTON_OFFSET = {X: -5, Y: -25};

$(document).ready(() => {
    let slider = $("#slider");
    if(slider.length === 0) return;
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
    let carousel_scroll_down_button = $("#carousel-scroll-down-button");
    if(carousel_scroll_down_button.length === 0) return;
    let scrollTopOffset = 1;
    carousel_scroll_down_button.on("click", () => {
        let calculateFinalPosition = () => slider.find("img").height() + scrollTopOffset - $("nav").outerHeight();
        let animateProperties = { scrollTop: calculateFinalPosition() }
        $("html, body").animate(animateProperties, {duration: SCROLL_ANIMATION_DURATION, specialEasing: {scrollTop: "easeOutCubic"}, step: function(now, fx) {fx.end = calculateFinalPosition();}} );
        carousel_scroll_down_button.blur();
    });

    // Carousel arrow positioning function
    let recalculate_arrow_position = () => {
        let sliderBottom = slider.height() + slider.offset().top;
        let windowBottom = $(window).scrollTop() + $(window).height();
        if ($(window).scrollTop() > sliderBottom) {
            carousel_scroll_down_button.css("visibility", "hidden");
        } else {
            if(windowBottom < sliderBottom){
                carousel_scroll_down_button.css("transform", `translate3d(${-carousel_scroll_down_button.width()/2 + CAROUSEL_SCROLL_DOWN_BUTTON_OFFSET.X}px, ${windowBottom-carousel_scroll_down_button.height() + CAROUSEL_SCROLL_DOWN_BUTTON_OFFSET.Y}px,0px)`);
            } else{
                carousel_scroll_down_button.css("transform", `translate3d(${-carousel_scroll_down_button.width()/2 + CAROUSEL_SCROLL_DOWN_BUTTON_OFFSET.X}px, ${slider.height()-carousel_scroll_down_button.height() + CAROUSEL_SCROLL_DOWN_BUTTON_OFFSET.Y}px, 0px)`);
            }
            carousel_scroll_down_button.css("visibility", "visible");
        }
    }

    // Position carousel scroll-down button
    $(window).on("scroll load resize focus blur", recalculate_arrow_position);
    // Set interval (necessary for ensuring positioning when resize events don't trigger properly)
    $(window).on("resize", () => {
        const maxLoops = 10;
        let loops = 0;
        let tempInterval = setInterval(() => {
            if(loops >= maxLoops) clearInterval(tempInterval);
            recalculate_arrow_position();
            loops++;
        }, 100);
    });
    recalculate_arrow_position();
});
