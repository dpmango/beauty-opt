//////////
// JQ-UI
//////////
(function ($, APP) {
  APP.Plugins.ui_slider = {
    init: function () {

      var ui_slider_min = 0;
      var ui_slider_max = 3000;

      $('[ui-slider-price]').slider({
        range: true,
        min: ui_slider_min,
        max: ui_slider_max,
        values: [128, 1477],
        slide: function (event, ui) {
          $('.slider-price__price-min')
            .html(ui.values[0] + ' руб.');
          $('.slider-price__price-max')
            .html(ui.values[1] + ' руб.');
          $('.slider-price__input-min')
            .val(ui.values[0]);
          $('.slider-price__input-max')
            .val(ui.values[1]);
        }
      });

      $('.slider-price__price-min')
        .html($('[ui-slider-price]')
          .slider("values", 0) + ' руб.');
      $('.slider-price__price-max')
        .html($('[ui-slider-price]')
          .slider("values", 1) + ' руб.');
      $('.slider-price__input-min')
        .val($('[ui-slider-price]')
          .slider("values", 0));
      $('.slider-price__input-max')
        .val($('[ui-slider-price]')
          .slider("values", 1));

      jQuery('.slider-price__input-min').change(function () {
        var value1 = jQuery('.slider-price__input-min').val();
        var value2 = jQuery('.slider-price__input-max').val();
        if (parseInt(value1) > parseInt(value2)) {
          value1 = value2;
          jQuery('.slider-price__input-min').val(value1);
        }
        jQuery("[ui-slider-price]").slider("values", 0, value1);
        $('.slider-price__price-min')
          .html($('[ui-slider-price]')
            .slider("values", 0) + ' руб.');
      });

      jQuery('.slider-price__input-max').change(function () {
        var value1 = jQuery('.slider-price__input-min').val();
        var value2 = jQuery('.slider-price__input-max').val();
        if (value2 > ui_slider_max) {
          value2 = ui_slider_max;
          jQuery('.slider-price__input-max').val(ui_slider_max)
        }
        if (parseInt(value1) > parseInt(value2)) {
          value2 = value1;
          jQuery('.slider-price__input-max').val(value2);
        }
        jQuery('[ui-slider-price]').slider("values", 1, value2);
        $('.slider-price__price-max')
          .html($('[ui-slider-price]')
            .slider("values", 1) + ' руб.');
      });

      jQuery('.slider-price input').keypress(function (event) {
        var key, keyChar;
        if (!event) var event = window.event;
        if (event.keyCode) key = event.keyCode;
        else if (event.which) key = event.which;
        if (key == null || key == 0 || key == 8 || key == 13 || key == 9 || key == 46 || key == 37 || key == 39) return true;
        keyChar = String.fromCharCode(key);
        if (!/\d/.test(keyChar)) return false;
      });

    },
  };
})(jQuery, window.APP);
