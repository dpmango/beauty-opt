//////////
// SLIDERS
//////////
(function ($, APP) {
  APP.Plugins.Sliders = {
    data: {
      swipers: [],
      responsiveSwipers: {
        featuredProducts: {
          instance: undefined,
          disableOn: 1201,
        },
        featuredProducts2: {
          instance: undefined,
          disableOn: 1201,
        },
      },
    },
    init: function () {
      this.initSwipers();
      this.initResponsiveSwipers();
      this.listenResize();
    },
    listenResize: function () {
      _window.on('resize', debounce(this.initResponsiveSwipers.bind(this), 200));
    },
    initSwipers: function () {

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
          slideChange: function () {
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
          992: {
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
          992: {
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

      var galleryThumbs = new Swiper('[js-gallery-thumbs]', {
        slidesPerView: 'auto',
        direction: 'vertical',
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
      });

      new Swiper('[js-gallery-main]', {
        thumbs: {
          swiper: galleryThumbs
        },
        navigation: {
          nextEl: '.swiper-button-next.swiper-button-next__gallery-main',
          prevEl: '.swiper-button-prev.swiper-button-prev__gallery-main',
        },
        pagination: {
          el: '.swiper-pagination-small.swiper-pagination__gallery-main',
        },
      });

      function f() {
        new Swiper('[js-auto-width-slider3]', {
          slidesPerView: 'auto',
          spaceBetween: 40,
          navigation: {
            nextEl: '.swiper-button-next.swiper-button-next__auto-width-slider3',
            prevEl: '.swiper-button-prev.swiper-button-prev__auto-width-slider3',
          },
          pagination: {
            el: '.swiper-pagination-small.swiper-pagination__auto-width-slider3',
          },
          breakpoints: {
            992: {
              spaceBetween: 0,
            },
          },
        });
      }

      let aws = debounce(f, 100);
      aws();

    },
    initResponsiveSwipers: function () {
      var featuredProducts = '[js-featured-products-swiper]';
      if ($(featuredProducts).length > 0) {
        this.initFeaturedProductsSwiper(featuredProducts);
      }

      var featuredProducts2 = '[js-featured-products-swiper2]';
      if ($(featuredProducts2).length > 0) {
        this.initFeaturedProductsSwiper2(featuredProducts2);
      }

      function f() {
        new Swiper('[js-auto-width-slider3]', {
          slidesPerView: 'auto',
          spaceBetween: 40,
          navigation: {
            nextEl: '.swiper-button-next.swiper-button-next__auto-width-slider3',
            prevEl: '.swiper-button-prev.swiper-button-prev__auto-width-slider3',
          },
          pagination: {
            el: '.swiper-pagination-small.swiper-pagination__auto-width-slider3',
          },
          breakpoints: {
            992: {
              spaceBetween: 0,
            },
          },
        });
      }
      let aws = debounce(f, 100);
      aws();
    },
    initFeaturedProductsSwiper: function (selector) {
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
                el: '.swiper-pagination-small.swiper-pagination__featured-products-swiper',
              },
              breakpoints: {
                992: {
                  spaceBetween: 0,
                },
              },
            });
          }
        }
      }
    },
    initFeaturedProductsSwiper2: function (selector) {
      var dataObj = this.data.responsiveSwipers.featuredProducts2;

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
                el: '.swiper-pagination-small.swiper-pagination__featured-products-swiper2',
              },
              breakpoints: {
                992: {
                  spaceBetween: 0,
                },
              },
            });
          }
        }
      }
    },
    destroy: function () {
      // ... code ...
    },
  };
})(jQuery, window.APP);
