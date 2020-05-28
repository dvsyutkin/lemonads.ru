window.addEventListener('DOMContentLoaded', function () {

    // слайдер компаний
    const sliderReview = $('.review__wrap.owl-carousel');
    sliderReview.owlCarousel($.extend({}, {
        nav: false,
        dots: false,
        loop: true,
        margin: 0,
        items: 1,
        // autoWidth: true
    }));


    // слайдер компаний
    const sliderCompany = $('.slider-company .owl-carousel');
    sliderCompany.owlCarousel($.extend({}, {
        nav: false,
        autoplay: true,
        autoplayTimeout: 3000,
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

    $('.slider-btn.slider-prev').click(function () {
        sliderCompany.trigger('prev.owl.carousel');
    });
    $('.slider-btn.slider-next').click(function () {
        sliderCompany.trigger('next.owl.carousel');
    });


});