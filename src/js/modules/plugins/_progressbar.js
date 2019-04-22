//////////
// progressbar
//////////
(function ($, APP) {
  APP.Plugins.Progressbar = {
    init: function () {
      var bar = new ProgressBar.Line('[js-Bar]', {
        easing: 'easeInOut'
    });
      bar.animate(1);
    },
    destroy: function () {
      // ... code ...
    },
  };
})(jQuery, window.APP);
