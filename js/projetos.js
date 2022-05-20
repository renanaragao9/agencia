

    $('.filter-btn').on('click', function() {
        let tipos = $(this).attr('id');
        let boxes = $('.project-box');

        $('.main-btn').removeClass('active');
        $(this).addClass('active');

        if(tipos == 'dsg-btn') {
            eachBoxes('dsg', boxes);
        } else if(tipos == 'dev-btn') {
            eachBoxes('dev', boxes);
        } else if(tipos == 'seo-btn') {
            eachBoxes('seo', boxes);
        } else {
            eachBoxes('all',boxes);
        }
    });

    function eachBoxes(tipos, boxes) {
        if(tipos == 'all') {
            $(boxes).fadeIn();
        } else {
            $(boxes).each(function() {
                if(!$(this).hasClass(tipos)) {
                    $(this).fadeOut('slow');
                } else {
                    $(this).fadeIn();
                }
            });
        }
    }