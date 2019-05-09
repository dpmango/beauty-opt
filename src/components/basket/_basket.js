////////////
// basket
////////////

(function ($, APP) {
  APP.Components.Basket = {
    init: function () {

      $(document).on('click', '.your-cart__quantity-prev', function () {
        var current_quantity = +$(this)
          .parent()
          .find('.your-cart__quantity')
          .html();
        if (current_quantity > 0) {
          $(this)
            .parent()
            .find('.your-cart__quantity')
            .html(--current_quantity);
        }
      });

      $(document).on('click', '.your-cart__quantity-next', function () {
        var current_quantity = +$(this)
          .parent()
          .find('.your-cart__quantity')
          .html();
        if (current_quantity < 99) {
          $(this)
            .parent()
            .find('.your-cart__quantity')
            .html(++current_quantity);
        }
      });

    },
  };
})(jQuery, window.APP);