//////////
// MODALS
//////////
(function ($, APP) {
  APP.Plugins.Modals = {
    init: function () {
      $('[data-fancybox]').fancybox({
        smallBtn: true,
        toolbar: false,
        touch: false,
        btnTpl: {
          smallBtn: '<button data-fancybox-close="" class="fancybox-button fancybox-button__close" title="Close"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.06051 16.9391C1.17214 17.0507 1.31167 17.1065 1.46516 17.1065C1.61865 17.1065 1.75818 17.0507 1.86981 16.9391L9.00004 9.80886L16.1303 16.9391C16.2419 17.0507 16.3814 17.1065 16.5349 17.1065C16.6745 17.1065 16.8279 17.0507 16.9396 16.9391C17.1628 16.7158 17.1628 16.353 16.9396 16.1298L9.80935 8.99955L16.9396 1.86932C17.1628 1.64607 17.1628 1.28328 16.9396 1.06002C16.7163 0.836764 16.3535 0.836764 16.1303 1.06002L9.00004 8.19025L1.86981 1.06002C1.64655 0.836764 1.28376 0.836764 1.06051 1.06002C0.837252 1.28328 0.837252 1.64607 1.06051 1.86932L8.19074 8.99955L1.06051 16.1298C0.837252 16.353 0.837252 16.7158 1.06051 16.9391Z" fill="#B7B7B7"/></svg></button>'
        }
      });
    },
    destroy: function () {
      // ... code ...
    },
  };
})(jQuery, window.APP);
