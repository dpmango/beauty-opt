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
})(jQuery, window.APP);
