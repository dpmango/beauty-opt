//////////
// JQ-UI
//////////
(function($, APP) {
  APP.Plugins.ui_slider = {
    init: function() {
      $('[ui-slider-price]').slider({
        range: true,
        min: 0,
        max: 2000,
        values: [ 128, 1477 ],
        slide: function( event, ui ) {
          $('.slider-price__price-min')
            .html(ui.values[ 0 ] + ' руб.');
          $('.slider-price__price-max')
            .html(ui.values[ 1 ] + ' руб.');
        }
      });
      $('.slider-price__price-min')
        .html($('[ui-slider-price]')
        .slider( "values", 0 ) + ' руб.');
      $('.slider-price__price-max')
        .html($('[ui-slider-price]')
        .slider( "values", 1 ) + ' руб.');
    },
  };
})(jQuery, window.APP);
