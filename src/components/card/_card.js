//////////
// Card
//////////
(function ($, APP) {
  APP.Components.Card = {
    init: function () {

      $(document).on('click', '.volume-color__volumes a', function () {
        $(this)
          .parents('.volume-color__volumes')
          .find('a')
          .removeClass('volume-color__volumes_active');
        $(this)
          .addClass('volume-color__volumes_active');
      });

      $(document).on('click', '.volume-color__colors a', function () {
        $(this)
          .parents('.volume-color__colors')
          .find('a')
          .removeClass('volume-color__colors_active');
        $(this)
          .addClass('volume-color__colors_active');
      });

      $(document).on('click', '.btn-add-cart', function () {
        $(this)
          .toggleClass('btn-add-cart_active');
      });

      $(document).on('click', '.about-product__open-description', function () {
        $(this)
          .remove();
        $('.about-product__wrap-description')
          .find('span')
          .addClass('about-product__height-auto');
      });

      $(document).on('click', '.about-product__open-specifications', function () {
        $(this)
          .remove();
        $('.about-product__wrap-specifications')
          .find('li')
          .removeClass('about-product__wrap-specifications_hidden');
      });

    },
  };
})(jQuery, window.APP);
