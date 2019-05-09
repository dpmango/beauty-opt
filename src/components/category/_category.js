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

      $(document).on('click', '.wrap-checkbox label', function () {
        if (!$(this).prev().prop('checked')) {
          $('.filters-form__selected-filters')
            .append('<li class="' + $(this).attr('for') + '">' + $(this).html() + '<svg class="ico ico-mono-close"><use xlink:href="img/sprite-mono.svg#ico-mono-close"></use></svg></li>');
        } else {
          $('.filters-form__selected-filters')
            .find('li.' + $(this).attr('for'))
            .remove();
        }
      });

      $(document).on('click', '.filters-form__selected-filters li svg', function () {
        var id_input = $(this)
          .parent()
          .attr('class');
        $('#' + id_input)
          .next()
          .click();
        $(this)
          .parent()
          .remove();
      });

      $(document).on('click', '.filters-form__btn', function () {
        $('.filters-form__selected-filters li svg')
          .click();
      });

    },
  };
})(jQuery, window.APP);
