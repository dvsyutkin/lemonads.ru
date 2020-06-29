window.addEventListener('DOMContentLoaded', function () {

    // слайдер компаний
    const sliderCompany = $('.slider-company .owl-carousel');
    sliderCompany.owlCarousel($.extend({}, {
        nav: false,
        dots: false,
        margin: 50,
        loop: false,
        responsive: {
            0: {
                items: 1,
            },
            720: {
                items: 3
            },
            960: {
                items: 5
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

    // табы
    const   tabsCityHead = document.querySelectorAll('.header__city'),
            tabsContentHead = document.querySelectorAll('.tabs-content-head'),
            tabsParentHead = document.querySelector('.header__city-box');

    function hideTabContent(tabsContent, tabs, styleActive) {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        
        tabs.forEach(item => {
            item.classList.remove(styleActive);
        });
    }

    function showTabContent(tabsContent, tabs, styleActive, i = 1) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add(styleActive);
    }

    if (tabsParentHead != null) {
        hideTabContent(tabsContentHead, tabsCityHead, 'header__city_active');
        showTabContent(tabsContentHead, tabsCityHead, 'header__city_active');

        tabsParentHead.addEventListener('click', (event) => {
            const target = event.target;
            if (target && target.classList.contains('header__city')) {
                tabsCityHead.forEach((item, i) => {
                    if(target == item) {
                        hideTabContent(tabsContentHead, tabsCityHead, 'header__city_active');
                        showTabContent(tabsContentHead, tabsCityHead, 'header__city_active', i);
                    }
                });
            }
        });
    }
    
    // табы Команда
    const   tabsComands = document.querySelectorAll('.comands__people-img img'),
            tabsContentComands = document.querySelectorAll('.comands__person'),
            tabsParentComands = document.querySelector('.comands__people');

    if (tabsParentComands != null) {
        hideTabContent(tabsContentComands, tabsComands, 'comands__people-active');
        showTabContent(tabsContentComands, tabsComands, 'comands__people-active', 0);
    
        tabsParentComands.addEventListener('click', (event) => {
            const target = event.target;
            if (target && target.classList.contains('comands-img')) {
                tabsComands.forEach((item, i) => {
                    if(target == item) {
                        hideTabContent(tabsContentComands, tabsComands, 'comands__people-active');
                        showTabContent(tabsContentComands, tabsComands, 'comands__people-active', i);
                    }
                });
            }
        });
    }

    //  табы отзывы
    const   tabsReview = document.querySelectorAll('.owl-item .slider__img'),
            tabsContentReview = document.querySelectorAll('.review-box'),
            tabsParentReview = document.querySelector('.slider__wrap');

    function hideTabContentReview() {
        tabsContentReview.forEach(item => {
            item.classList.add('review-hide');
            item.classList.remove('review-show', 'fade');
        });
        
        tabsReview.forEach(item => {
            item.classList.remove('slider-active');
        });
    }

    function showTabContentReview(i = 0) {
        tabsContentReview[i].classList.add('review-show', 'fade');
        tabsContentReview[i].classList.remove('review-hide');
        tabsReview[i].classList.add('slider-active');
    }         

    if (tabsParentReview != null) {
        hideTabContentReview();
        showTabContentReview();

        tabsParentReview.addEventListener('click', (event) => {
            const target = event.target;
            
            if (target && target.classList.contains('slider__img')) {
                tabsReview.forEach((item, i) => {
                    if (target == item) {
                        hideTabContentReview();
                        showTabContentReview(i);
                    }
                });
            }
        });
    }

    // табы контакты
    const   tabsContact = document.querySelectorAll('.contacts-city'),
            tabsContentContact = document.querySelectorAll('.contacts__tabs-content'),
            tabsParentContact = document.querySelector('.contacts__city-box');
    
    if (tabsParentContact != null) {
        hideTabContent(tabsContentContact, tabsContact, 'contacts__city_active');
        showTabContent(tabsContentContact, tabsContact, 'contacts__city_active', 0);
            
        tabsParentContact.addEventListener('click', (event) => {
            const target = event.target;
            if (target && target.classList.contains('contacts-city')) {
                tabsContact.forEach((item, i) => {
                    if(target == item) {
                        hideTabContent(tabsContentContact, tabsContact, 'contacts__city_active');
                        showTabContent(tabsContentContact, tabsContact, 'contacts__city_active', i);
                    }
                });
            }
        });
    }
    

    // кнопка наверх
    const scrollBtn = document.querySelector('.btn-up');
    scrollBtn.style.opacity = 0;
    
    scrollBtn.addEventListener('click', () => {
        $('html, body').animate({scrollTop: 0}, 1000);
    });
    $(window).scroll(function(){
        if($(window).scrollTop() > 300){
            scrollBtn.style.opacity = 1;
        }
        else{
            scrollBtn.style.opacity = 0;
        }
    });

    // Стилизация input:files
    $("#file").change(function(){
        var filename = $(this).val().replace(/.*\\/, "");
        $(".label-file").html(filename);
   });

   	// всплывающее окно
	const   btnOrder = document.querySelectorAll('.btn-order'),
	        btnRequest = document.querySelectorAll('.btn-request'),
	        btnReview = document.querySelector('.btn-review'),
            popupOverlay = document.querySelector('.popup__overlay'),
            popupRequest = document.querySelector('.popup__request'),
            popupReview = document.querySelector('.popup__add-review'),
            menuBtn = document.querySelector('.btn-menu'),
            popupMenu = document.querySelector('.popup__menu'),
            navItem = document.querySelectorAll('.nav__item a');
    
	btnOrder.forEach(element => {
		element.addEventListener('click', function() {
            popupOverlay.style.display = 'block';
            popupOverlay.classList.add('fade');
		});
	});

	popupOverlay.addEventListener('click', function(e) {
		if (e.target === this) {
			popupOverlay.style.display = 'none';
		}
    });

    btnRequest.forEach(element => {
		element.addEventListener('click', function() {
            popupRequest.style.display = 'block';
            popupRequest.classList.add('fade');
		});
    });

    popupRequest.addEventListener('click', function(e) {
		if (e.target === this) {
			popupRequest.style.display = 'none';
		}
    });

    // добавить отзыв
    if (btnReview != null) {
        btnReview.addEventListener('click', function() {
            popupReview.style.display = 'block';
            popupReview.classList.add('fade');
        } );
    }

    popupReview.addEventListener('click', function(e) {
		if (e.target === this) {
			popupReview.style.display = 'none';
		}
    });

    // меню
    menuBtn.addEventListener('click', ()=> {
        popupMenu.style.display = 'block';
        popupMenu.classList.add('fade');
    });

	popupMenu.addEventListener('click', function(e) {
		if (e.target === this) {
			popupMenu.style.display = 'none';
		}
    });

    // Закрытие всплывающих окон по кнопке
    const closeForm = document.querySelectorAll('.popup-form-btn-close');
    closeForm.forEach(element => {
        element.addEventListener('click', (event)=>{
            event.preventDefault();
            popupOverlay.style.display = 'none';
            popupMenu.style.display = 'none';
            popupRequest.style.display = 'none';
            popupReview.style.display = 'none';
        });
    });
    // закрытие меню по клику на пункт меню
    navItem.forEach(item => {
        item.addEventListener('click', () => {
            popupMenu.style.display = 'none';
        });
    });

// выпадающий списокx
    $('.works__menu_mob').select2();

// wow
    new WOW().init();

// плавная прокрутка к якорю
    const   header = document.querySelector('.header'),
            headerHeight = header.offsetHeight;
    console.log(headerHeight);
    
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();
        var sc = $(this).attr("href"),
            dn = $(sc).offset().top;
            dn = dn - headerHeight;
        /*
        * sc - в переменную заносим информацию о том, к какому блоку надо перейти
        * dn - определяем положение блока на странице
        */
        $('html, body').animate({scrollTop: dn}, 1000);
    });




});
        