//////////
// progressbar
//////////
(function($, APP) {
  APP.Plugins.Progressbar = {
    init: function() {
      if ($('[js-Bar]').length === 0) {
        return;
      }

      var bar = new ProgressBar.Line('[js-Bar]', {
        easing: 'easeInOut',
      });
      bar.animate(1);
    },
    destroy: function() {
      // ... code ...
    },
  };
})(jQuery, window.APP);
