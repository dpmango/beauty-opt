/////////////////
// checkout
/////////////////

(function ($, APP) {
  APP.Components.Checkout = {
    init: function () {

      $(document).on('click', '.do-not-show', function () {
        if ($(this).prev().prop('checked')) {
          $(this)
            .parents('.wrap-form__row')
            .next()
            .addClass('hidden');
          $(this)
            .parents('.wrap-form__row')
            .removeClass('wrap-form__row_indent');
        } else {
          $(this)
            .parents('.wrap-form__row')
            .next()
            .removeClass('hidden');
          $(this)
            .parents('.wrap-form__row')
            .addClass('wrap-form__row_indent');
        }
      });

      $(document).on('click', '.wrap-form__delivery-select', function () {
        $(this)
          .parent()
          .find('.wrap-form__delivery-select')
          .removeClass('wrap-form__delivery-select_active');
        $(this)
          .addClass('wrap-form__delivery-select_active');
      });

    },
  };
})(jQuery, window.APP);
