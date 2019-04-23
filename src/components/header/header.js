//////////
// HEADER
//////////
(function ($, APP) {
  APP.Components.Header = {
    init: function () {

      $('.btn-open-all-catalog').on('click', function () {
        $(this).toggleClass('btn-open-all-catalog_active');
        return false;
      });

      $('.form-select-city__custom-select').on('click', 'a', function () {
        let value_city = $(this).html();
        $(this).parents('.form-select-city').find('.form-select-city__input').val(value_city);
        return false;
      });

    },
  };
})(jQuery, window.APP);
