const content = {
    'dorm': {
        'title': 'Dorm Room',
        'photos': ['/assets/images/tour/dorm/1'],
        'description': 'Though the walls are the same as regular dorm rooms, our rooms usually look rather different than the standard RIT room layout.',
    },
    'user-center': {
        'title': 'User Center',
        'photos': ['/assets/images/tour/usercenter/1', '/assets/images/tour/usercenter/2'],
        'description': 'The User Center is a productive social room. It is often sought out as a place for members to socialize and get work done. It also serves as a meeting place, a project work room, and a technical seminar room.',
    },
    'lounge': {
        'title': 'Lounge',
        'photos': ['/assets/images/tour/lounge/1', '/assets/images/tour/lounge/2'],
        'description': 'The Lounge is CSH\'s main social hub. This room is used to host movie nights, social events, technical seminars, company visits, and E-Board meetings.',
    },
    'server-room': {
        'title': 'Server Room',
        'photos': ['/assets/images/tour/server/1', '/assets/images/tour/server/2'],
        'description': 'CSH\'s server room serves as a place for members to learn and practice their networking skills. It also serves as a place to host the variety of network services provided to our members.',
    },
    'software-room': {
        'title': 'Software Room',
        'photos': ['/assets/images/tour/software/1', '/assets/images/tour/software/2'],
        'description': 'The Software Room is the perfect place for small group tasks. It is a quiet room that is away from the normal hustle and bustle of floor which makes it great for taking phone calls, playing board games, and working on group assignments. The Software Room also houses CSH\'s book collection as well as a variety of board games.',
    },
    'research-room': {
        'title': 'Research Room',
        'photos': ['/assets/images/tour/research/1', '/assets/images/tour/research/2', '/assets/images/tour/research/3', '/assets/images/tour/research/4'],
        'description': 'The Research Room is CSH\'s workshop. It houses our two 3D Printers, as well as the tools and materials for members\' electronics projects.',
    },
    'library': {
        'title': 'Library',
        'photos': ['/assets/images/tour/library/1', '/assets/images/tour/library/2'],
        'description': 'The Library is CSH\'s multi-function archive and arcade. It serves as a storage place for all of our historical records and keepsakes as well as a variety of arcade machines, both vintage and custom-built.',
    },
};

const constructSliderHTML = (room) => {
    let innerHTML = '';
    for (let photo of room.photos) {
        innerHTML += `
            <picture>
                <source srcset="${photo}.webp" type="image/webp" />
                <source srcset="${photo}.jpg" type="image/jpeg" />
                <img src="${photo}.jpg" alt="CSH ${room.title}" />
            </picture>`;
    }
    return innerHTML;
};

$(document).ready(() => {
    if ($('#tour-page').length) {
        const room = content['dorm'];
        $('#slider').slick('unslick');
        $('#tour-description').text(room.description);
        $('#tour-title').text(room.title);
        $('#slider').html(constructSliderHTML(room));
        $('#slider').slick({
            dots: true,
            autoplay: true,
            autoplaySpeed: 5000,
            mobileFirst: true,
        });
        $('.dropdown-item').click(function(e) {
            e.preventDefault();
            $('.dropdown-item.active').first().removeClass('active');
            $(this).addClass('active');
            $('#slider').slick('unslick');
            const room = content[$(this).attr('id')];
            $('#tour-description').text(room.description);
            $('#tour-title').text(room.title);
            $('#slider').html(constructSliderHTML(room));
            $('#slider').slick({
                dots: true,
                autoplay: true,
                autoplaySpeed: 5000,
                mobileFirst: true,
            });
        });
    }
});
