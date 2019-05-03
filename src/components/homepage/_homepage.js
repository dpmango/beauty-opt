//////////
// Homepage
//////////
(function($, APP) {
  APP.Components.Homepage = {
    init: function() {
      // кнопка в корзину
      $(document).on('click', '.product__in-garbage', function() {
        $(this).toggleClass('product__in-garbage_active');
        return false;
      });

      // табы
      $(document).on('click', '.tabs-link__tag', function() {
        var tab_current = $(this).attr('href');
        $(this)
          .parents('.tabs-link')
          .find('.tabs-link__tag')
          .removeClass('tabs-link__tag_active');
        $(this).addClass('tabs-link__tag_active');
        $('.tab').removeClass('tab_active');
        $(tab_current).addClass('tab_active');
        return false;
      });

      // Показать все категории
      $(document).on('click', '.show-all-categories', function() {
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
