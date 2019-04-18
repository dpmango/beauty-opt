//////////
// MODALS
//////////
(function ($, APP) {
  APP.Plugins.Modals = {
    init: function () {
      $('[js-popup]').fancybox();
    },
    destroy: function () {
      // ... code ...
    },
  };
})(jQuery, window.APP);
