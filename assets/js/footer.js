const fixFooterPadding = () => {
    if ($('footer')) {
        const footerHeight = $('footer').first().height();
        $('main').css('padding-bottom', footerHeight + 'px');
    }
}

$(document).ready(fixFooterPadding);
$(window).resize(fixFooterPadding);
