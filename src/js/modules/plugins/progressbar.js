//////////
// progressbar
//////////
(function ($, APP) {
  APP.Plugins.Progressbar = {
    init: function () {

      var main_bar = '.swiper-pagination__main-slider .swiper-pagination-bullet-active';

      if ($(main_bar).length === 0) {
        return;
      }

      var bar = new ProgressBar.SemiCircle(main_bar, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null
      });

    },
    destroy: function () {
      // ... code ...
    },
  };
})(jQuery, window.APP);
