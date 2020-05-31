window.addEventListener('DOMContentLoaded', function () {

    // слайдер отзывов
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
        dots: false,
        margin: 50,
        loop: true,
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
            popupOverlay = document.querySelector('.popup__overlay'),
            menuBtn = document.querySelector('.btn-menu'),
            popupMenu = document.querySelector('.popup__menu'),
            navItem = document.querySelectorAll('.nav__item a');
    
	btnOrder.forEach(element => {
		element.addEventListener('click', function () {
			popupOverlay.style.display = 'block';
		});
	});

	popupOverlay.addEventListener('click', function (e) {
		if (e.target === this) {
			popupOverlay.style.display = 'none';
		}
    });
    // меню
    menuBtn.addEventListener('click', ()=> {
        popupMenu.style.display = 'block';
    });

	popupMenu.addEventListener('click', function (e) {
		if (e.target === this) {
			popupMenu.style.display = 'none';
		}
    });

    // Закрытие всплывающих окон
    const closeForm = document.querySelectorAll('.popup-form-btn-close');
    closeForm.forEach(element => {
        element.addEventListener('click', ()=>{
            popupOverlay.style.display = 'none';
            popupMenu.style.display = 'none';
        });
    });

    navItem.forEach(item => {
        item.addEventListener('click', () => {
            popupMenu.style.display = 'none';
        });
    });

// выпадающий список
    $('.works__menu_mob').select2();
});
        