//////////
// SLIDERS
//////////
(function($, APP) {
  APP.Plugins.Sliders = {
    data: {
      swipers: [],
      responsiveSwipers: {
        featuredProducts: {
          instance: undefined,
          disableOn: 1201,
        },
      },
    },
    init: function() {
      this.initSwipers();
      this.initResponsiveSwipers();
      this.listenResize();
    },
    listenResize: function() {
      _window.on('resize', debounce(this.initResponsiveSwipers.bind(this), 200));
    },
    initSwipers: function() {

      new Swiper('[js-main-slider]', {
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
        on: {
          slideChange: function() {
            var curSlide = this.realIndex; // swiper current slide
            APP.Plugins.Progressbar.animateBullets('mainSlider', curSlide);
          },
        },
      });

      new Swiper('[js-auto-width-slider]', {
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

      new Swiper('[js-auto-width-slider2]', {
        slidesPerView: 'auto',
        spaceBetween: 40,
        navigation: {
          nextEl: '.swiper-button-next.swiper-button-next__auto-width-slider2',
          prevEl: '.swiper-button-prev.swiper-button-prev__auto-width-slider2',
        },
        pagination: {
          el: '.swiper-pagination-small.swiper-pagination__auto-width-slider2',
        },
        breakpoints: {
          768: {
            spaceBetween: 0,
          },
        },
      });

      new Swiper('[js-promotions-specials]', {
        slidesPerView: 'auto',
        spaceBetween: 40,
        navigation: {
          nextEl: '.swiper-button-next.swiper-button-next__promotions-specials',
          prevEl: '.swiper-button-prev.swiper-button-prev__promotions-specials',
        },
        pagination: {
          el: '.swiper-pagination-small.swiper-pagination__promotions-specials',
        },
      });
    },
    initResponsiveSwipers: function() {
      var featuredProducts = '[js-featured-products-swiper]';
      if ($(featuredProducts).length > 0) {
        this.initFeaturedProductsSwiper(featuredProducts);
      }
    },
    initFeaturedProductsSwiper: function(selector) {
      var dataObj = this.data.responsiveSwipers.featuredProducts;

      if ($(selector).length > 0) {
        if (window.innerWidth >= dataObj.disableOn) {
          if (dataObj.instance !== undefined) {
            dataObj.instance.destroy(true, true);
            dataObj.instance = undefined;
          }
          // return
        } else {
          if (dataObj.instance === undefined) {
            // ABOUT SWIPER
            dataObj.instance = new Swiper(selector, {
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
    },
    destroy: function() {
      // ... code ...
    },
  };
})(jQuery, window.APP);
