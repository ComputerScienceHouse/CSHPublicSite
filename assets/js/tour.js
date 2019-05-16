const constructSliderHTML = (photos) => {
    let innerHTML = '';
    for (let photo of photos) {
        innerHTML += '<div><img src="' + photo + '" /></div>\n';
    }
    return innerHTML;
};

$(document).ready(() => {
    if ($('#tour-page').length) {
        const content = {
            'dorm': {
                'photos': ['/assets/images/tour/dorm/dorm1.jpg', 'https://placehold.it/1203x803'],
                'description': 'Though the walls are the same as regular dorm rooms, our rooms usually look rather different than the standard RIT room layout.',
            },
            'user-center': {
                'photos': ['https://placehold.it/1203x803', 'https://placehold.it/1203x803'],
                'description': 'The User Center is a productive social room. It is often sought out as a place for members to socialize and get work done. It also serves as a meeting place, a project work room, and a technical seminar room.',
            },
            'lounge': {
                'photos': ['https://placehold.it/1203x803', 'https://placehold.it/1203x803'],
                'description': 'The Lounge is CSH\'s main social hub. This room is used to host movie nights, social events, technical seminars, company visits, and E-Board meetings.',
            },
            'server-room': {
                'photos': ['https://placehold.it/1203x803', 'https://placehold.it/1203x803'],
                'description': 'CSH\'s server room serves as a place for members to learn and practice their networking skills. It also serves as a place to host the variety of network services provided to our members.',
            },
            'software-room': {
                'photos': ['https://placehold.it/1203x803', 'https://placehold.it/1203x803'],
                'description': 'The Software Room is the perfect place for small group tasks. It is a quiet room that is away from the normal hustle and bustle of floor which makes it great for taking phone calls, playing board games, and working on group assignments. The Software Room also houses CSH\'s book collection as well as a variety of board games.',
            },
            'project-room': {
                'photos': ['https://placehold.it/1203x803', 'https://placehold.it/1203x803'],
                'description': 'The Project Room is CSH\'s own custom workshop. It provides the tools and resources necessary for members to complete any project they can imagine.',
            },
            'library': {
                'photos': ['https://placehold.it/1203x803', 'https://placehold.it/1203x803'],
                'description': 'The Library is CSH\'s multi-function archive and arcade. It serves as a storage place for all of our historical records and keepsakes as well as a variety of arcade machines, both vintage and custom-built.',
            },
            'conference-room': {
                'photos': ['https://placehold.it/1203x803', 'https://placehold.it/1203x803'],
                'description': 'The Conference Room is ideal for group assignments. Not only is it often the quietest room on floor but it sports multiple white boards as well as a large conference table and couches.',
            },
        };
        $('.dropdown-item').click(function(e) {
            e.preventDefault();
            $('.dropdown-item.active').first().removeClass('active');
            $(this).addClass('active');
            $('#slider').slick('unslick');
            const room = content[$(this).attr('id')];
            const photos = room.photos;
            const description = room.description;
            $('#tour-description').text(description);
            $('#slider').html(constructSliderHTML(photos));
            $('#slider').slick({
                dots: true,
                autoplay: true,
                autoplaySpeed: 5000,
                mobileFirst: true,
            });
        });
    }
});
