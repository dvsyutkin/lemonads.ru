window.addEventListener('DOMContentLoaded', function () {
    const sliderCompany = $('.slider-company .owl-carousel');
    sliderCompany.owlCarousel($.extend({}, {
        nav: false,
        dots: false,
        margin: 50,
        loop: true,
        responsive: {
            0: {
                items: 1,
            },
            720: {
                items: 2
            },
            960: {
                items: 3
            },
            1440: {
                items: 5
            }
        },

    }));

    $('.news__arrow-box .news__arrow-prev').click(function () {
        sliderTwo.trigger('prev.owl.carousel');
    });
    $('.news__arrow-box .news__arrow-next').click(function () {
        sliderTwo.trigger('next.owl.carousel');
    });


});