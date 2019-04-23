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
        autoplay: {
          delay: 4000,
        },
        // effect: 'fade',
        // fadeEffect: {
        //   crossFade: true,
        // },
        on: {
          slideChange: function() {
            var curSlide = this.realIndex; // swiper current slide
            APP.Plugins.Progressbar.animateBullets('mainSlider', curSlide);
          },
        },
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

      var aboutSwiper = {
        instance: undefined,
        disableOn: 1201,
      };

      initSliders();

      function initSliders() {
        // TODO - wrong selector on barba.js changes

        // INIT CHECKERS
        var aboutSelector = '[auto-width-slider3]';

        if ($(aboutSelector).length > 0) {
          if (_window.width() >= aboutSwiper.disableOn) {
            if (aboutSwiper.instance !== undefined) {
              aboutSwiper.instance.destroy(true, true);
              aboutSwiper.instance = undefined;
            }
            // return
          } else {
            if (aboutSwiper.instance === undefined) {
              // ABOUT SWIPER
              aboutSwiper.instance = new Swiper(aboutSelector, {
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
            }
          }
        }
      }
    },
    destroy: function() {
      // ... code ...
    },
  };
})(jQuery, window.APP);
