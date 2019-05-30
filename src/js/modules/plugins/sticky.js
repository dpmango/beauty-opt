/////////
// STICKY
/////////
(function ($, APP) {
  APP.Plugins.Sticky = {
    init: function () {
      if ($('[js-sticky]').html() != undefined) {
        var sticky = new Waypoint.Sticky({
          element: $('[js-sticky]')[0]
        });
      }
    },
    destroy: function () {
      // ... code ...
    },
  };
})(jQuery, window.APP);
