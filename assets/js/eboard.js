$(document).ready(() => {
    if ($('#eboard').length) {
        $('.eboard-photo').hover(function() {
            $(this).fadeOut().attr('src', function(index, attr) {
                return attr.replace('.jpg', '_joke.jpg');
            }).fadeIn();
        }, function() {
            $(this).fadeOut().attr('src', function(index, attr) {
                return attr.replace('_joke.jpg', '.jpg');
            }).fadeIn();
        });
    }
});
