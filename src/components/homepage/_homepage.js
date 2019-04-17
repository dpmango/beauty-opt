//////////
// Homepage
//////////
(function ($, APP) {
  APP.Components.Homepage = {
    init: function () {
      $('.horizontal-menu').on('click', 'a', function () {
        if (!$(this).hasClass('horizontal-menu_active')) {
          $(this).parents('.horizontal-menu').find('a').removeClass('horizontal-menu_active');
          $(this).addClass('horizontal-menu_active');
          $('.menu-all-catalog').addClass('menu-all-catalog_active');
        } else {
          $(this).removeClass('horizontal-menu_active');
          $('.menu-all-catalog').removeClass('menu-all-catalog_active');
        }
        return false;
      });
    },
  };
  APP.Plugins.Sliders = {
    init: function () {
      new Swiper('[main-slider]', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        loop: true,
      });
    },
    destroy: function () {
      // ... code ...
    },
  };
})(jQuery, window.APP);
