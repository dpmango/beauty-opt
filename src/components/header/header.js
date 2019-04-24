//////////
// HEADER
//////////
(function ($, APP) {
  APP.Components.Header = {
    init: function () {

      $(document).click(function (e) {
        if (!$(e.target).is('.search-form *')) {
          $('.search-options').removeClass('search-options_active');
        }
      });

      $('.btn-open-full-catalog').on('click', function () {
        $(this).toggleClass('btn-open-full-catalog_active');
        return false;
      });

      $('.form-select-city__custom-select').on('click', 'a', function () {
        let value_city = $(this).html();
        $(this).parents('.form-select-city').find('.form-select-city__input').val(value_city);
        return false;
      });

      $('.wrap-mobile-search__ico').on('click', function () {
        $('.mobile-search').addClass('mobile-search_active');
      });

      $('.search-form__inpuut').keypress(function (e) {
        if (e.which !== 32) {
          $(this)
            .parents('.search-form')
            .find('.search-options')
            .addClass('search-options_active');
          $(this)
            .parents('.search-form')
            .find('.search-form__close')
            .addClass('search-form__close_active');
        }
      });

      $('.search-form__close').on('click', function () {
        $(this)
          .parents('.search-form')
          .find('.search-options')
          .removeClass('search-options_active');
        $(this)
          .parents('.search-form')
          .find('.search-form__inpuut')
          .val('');
        $(this).removeClass('search-form__close_active');
      });

    },
  };
})(jQuery, window.APP);
