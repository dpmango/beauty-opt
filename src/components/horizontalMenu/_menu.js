//////////
// Menu
//////////

(function($, APP) {
  APP.Components.Menu = {
    init: function() {
      $(document).click(function(e) {
        if (!$(e.target).is('.wrap-horizontal-menu *')) {
          $('.menu-all-catalog').removeClass('menu-all-catalog_active');
          $('.horizontal-menu a').removeClass('horizontal-menu_active');
        }
      });

      $(document).on('click', '.horizontal-menu a', function() {
        if (!$(this).hasClass('horizontal-menu_active')) {
          $(this)
            .parents('.horizontal-menu')
            .find('a')
            .removeClass('horizontal-menu_active');
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
