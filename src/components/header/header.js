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
    },
  };
})(jQuery, window.APP);
