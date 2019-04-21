//////////
// Homepage
//////////
(function ($, APP) {
  APP.Components.Homepage = {
    init: function () {

      $('.horizontal-menu').on('click', 'a', function () {
        if (!$(this).hasClass('horizontal-menu_active')) {
          $(this).parents('.horizontal-menu').find('a').removeClass('horizontal-menu_active');
          $(this).addClass('horizontal-menu_active');
          $('.menu-all-catalog').addClass('menu-all-catalog_active');
        } else {
          $(this).removeClass('horizontal-menu_active');
          $('.menu-all-catalog').removeClass('menu-all-catalog_active');
        }
        return false;
      });

      $('.block-product__in-garbage').on('click', function () {
        $(this).toggleClass('block-product__in-garbage_active');
        return false;
      });

      $('.block-main-tags__tag').on('click', function () {
        $(this).toggleClass('block-main-tags__tag_active');
        return false;
      });

      $('.show-all-categories').on('click', function () {
        $(this).parents('.container').find('.categories-grid__category').removeClass('categories-grid__category_hidden');
        $(this).parent().remove();
        return false;
      });

      $('.wrap-mobile-search__ico').on('click', function () {
        $('.mobile-search').addClass('mobile-search_active');
      });

    },
  };
  APP.Plugins.Sliders = {
    init: function () {

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
          el: '.swiper-pagination-small.swiper-pagination__auto-width-slider'
        },
        breakpoints: {
          768: {
            spaceBetween: 0
          }
        }
      });

      new Swiper('[auto-width-slider2]', {
        slidesPerView: 'auto',
        spaceBetween: 40,
        navigation: {
          nextEl: '.swiper-button-next.swiper-button-next__auto-width-slider2',
          prevEl: '.swiper-button-prev.swiper-button-prev__auto-width-slider2',
        },
        pagination: {
          el: '.swiper-pagination-small.swiper-pagination__auto-width-slider2'
        },
      });

      new Swiper('[auto-width-slider3]', {
        slidesPerView: 'auto',
        spaceBetween: 40,
        pagination: {
          el: '.swiper-pagination-small.swiper-pagination__auto-width-slider3'
        },
        breakpoints: {
          768: {
            spaceBetween: 0
          }
        }
      });

    },
    destroy: function () {
      // ... code ...
    },
  };
})(jQuery, window.APP);
