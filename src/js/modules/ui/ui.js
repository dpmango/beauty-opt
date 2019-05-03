//////////
// JQ-UI
//////////
(function($, APP) {
  APP.Plugins.ui = {
    init: function() {
      $('[ui-slider]').slider();
    },
  };
})(jQuery, window.APP);
