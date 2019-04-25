//////////
// Homepage
//////////
(function($, APP) {
  APP.Components.Homepage = {
    init: function() {
      $(document).click(function(e) {
        if (!$(e.target).is('.wrap-horizontal-menu *')) {
          $('.menu-all-catalog').removeClass('menu-all-catalog_active');
          $('.horizontal-menu a').removeClass('horizontal-menu_active');
        }
      });

      $('.horizontal-menu').on('click', 'a', function() {
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

      $('.product__in-garbage').on('click', function() {
        $(this).toggleClass('product__in-garbage_active');
        return false;
      });

      $('.tabs__tag').on('click', function() {
        $(this).toggleClass('tabs__tag_active');
        return false;
      });

      // Показать все категории
      $('.show-all-categories').on('click', function() {
        $(this)
          .parents('.container')
          .find('.categories-grid__category')
          .removeClass('categories-grid__category_hidden');
        $(this)
          .parent()
          .remove();
        return false;
      });

    },
  };
})(jQuery, window.APP);
