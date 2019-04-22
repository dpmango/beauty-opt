//////////
// SLIDERS
//////////
(function($, APP) {
  APP.Plugins.Sliders = {
    init: function() {
      new Swiper('[main-slider]', {
        navigation: {
          nextEl: '.swiper-button-next.swiper-button-next__main-slider',
          prevEl: '.swiper-button-prev.swiper-button-prev__main-slider',
        },
        pagination: {
          el: '.swiper-pagination.swiper-pagination__main-slider',
          clickable: true,
        },
        loop: true,
      });

      new Swiper('[auto-width-slider]', {
        slidesPerView: 'auto',
        spaceBetween: 40,
        navigation: {
          nextEl: '.swiper-button-next.swiper-button-next__auto-width-slider',
          prevEl: '.swiper-button-prev.swiper-button-prev__auto-width-slider',
        },
        pagination: {
          el: '.swiper-pagination-small.swiper-pagination__auto-width-slider',
        },
        breakpoints: {
          768: {
            spaceBetween: 0,
          },
        },
      });

      new Swiper('[auto-width-slider2]', {
        slidesPerView: 'auto',
        spaceBetween: 40,
        navigation: {
          nextEl: '.swiper-button-next.swiper-button-next__auto-width-slider2',
          prevEl: '.swiper-button-prev.swiper-button-prev__auto-width-slider2',
        },
        pagination: {
          el: '.swiper-pagination-small.swiper-pagination__auto-width-slider2',
        },
      });

      new Swiper('[auto-width-slider3]', {
        slidesPerView: 'auto',
        spaceBetween: 40,
        pagination: {
          el: '.swiper-pagination-small.swiper-pagination__auto-width-slider3',
        },
        breakpoints: {
          768: {
            spaceBetween: 0,
          },
        },
      });
    },
    destroy: function() {
      // ... code ...
    },
  };
})(jQuery, window.APP);
