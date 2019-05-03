////////////
// category
////////////

(function ($, APP) {
  APP.Components.Category = {
    init: function () {

      $(document).on('click', '.filters-form__spoiler-head', function () {
        if (!$(this).hasClass('filters-form__spoiler-head_passive')) {
          $(this)
            .next()
            .slideUp('.25s');
          $(this)
            .addClass('filters-form__spoiler-head_passive');
        } else {
          $(this)
            .next()
            .slideDown('.25s');
          $(this)
            .removeClass('filters-form__spoiler-head_passive');
        }
      });

      $(document).on('click', '.catalog-view__select li', function () {
        $(this)
          .parents('.catalog-view__select')
          .find('li')
          .removeClass('catalog-view__active');
        $(this)
          .addClass('catalog-view__active');
      });

    },
  };
})(jQuery, window.APP);
