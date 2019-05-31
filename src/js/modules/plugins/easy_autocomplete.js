////////////////////
// EASY AUTOCOMPLETE
////////////////////
(function($, APP) {
  APP.Plugins.easy_autocomplete = {
    init: function() {
      var options = {
        url: '../russia.json',

        getValue: 'city',

        list: {
          match: {
            enabled: true,
          },
        },
      };

      $('#js-easyAutocomplete').easyAutocomplete(options);
    },
    destroy: function() {
      // ... code ...
    },
  };
})(jQuery, window.APP);
