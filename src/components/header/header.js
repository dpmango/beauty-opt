//////////
// HEADER
//////////
(function ($, APP) {
  APP.Components.Header = {
    init: function () {

      $(document).click(function (e) {

        // закрыть подсказку поиска
        if (!$(e.target).is('.search-form *')) {
          $('.search-options').removeClass('search-options_active');

          // если поле поиска пустое скрыть крестик
          if ($('.search-form__inpuut').val() == '') {
            $('.search-form__close').removeClass('search-form__close_active');
          }
        }

        // закрываем мобильный поиск
        if (!$(e.target).is('.wrap-mobile-search *')) {
          $('.mobile-search').removeClass('mobile-search_active');
        }

        // закрыть полный каталог
        if (!$(e.target).is('.wrap-menu-full-catalog *')) {
          $('body')
            .removeClass('body-lock');
          $('.btn-open-full-catalog').removeClass('btn-open-full-catalog_active');
          $('.menu-full-catalog').addClass('menu-full-catalog_hidden');
        }

      });

      // узнаем высоту основного меню полного каталога
      var main_height_ul = $('.menu-full-catalog__main').innerHeight();

      // открыть/закрыть полный каталог
      $(document).on('click', '.btn-open-full-catalog', function () {
        $('body')
          .toggleClass('body-lock');
        $(this)
          .toggleClass('btn-open-full-catalog_active');
        $('.menu-full-catalog')
          .toggleClass('menu-full-catalog_hidden');
        return false;
      });

      // закрыть полный каталог
      $(document).on('click', '.menu-full-catalog__btn-close', function () {
        $('body')
          .removeClass('body-lock');
        $('.btn-open-full-catalog')
          .removeClass('btn-open-full-catalog_active');
        $('.menu-full-catalog')
          .addClass('menu-full-catalog_hidden');
      });

      // открыть подкатегорию
      $(document).on('click', '.menu-full-catalog__main li', function () {
        // проверка на существование подкатегории
        if ($(this).find('ul').is('ul')) {

          // отобразить кнопку назад
          $(this)
            .parents('.menu-full-catalog')
            .find('.btn-back')
            .removeClass('menu-full-catalog__hidden');

          // скрыть заголовок
          $(this)
            .parents('.menu-full-catalog')
            .find('.menu-full-catalog__title')
            .addClass('menu-full-catalog__hidden');

          // узнаем высоту следующей подкатегории
          let height_ul = $(this).find('>ul').innerHeight();

          // присваиваем высоту фону
          $('.menu-full-catalog__main').css('height', height_ul);

          // скрываем текущее меню
          $(this)
            .parent()
            .find('>li')
            .addClass('menu-full-catalog__main_passive');

          // отображаем следующее меню
          $(this)
            .find('>ul')
            .addClass('menu-full-catalog__main_active');

          // удаляем метку с прошлого активного меню
          $(this)
            .parent()
            .removeClass('menu-full-catalog__main_current');

          // помечаем текущее активное меню
          $(this)
            .find('>ul')
            .addClass('menu-full-catalog__main_current');

          $('.menu-full-catalog__main_current')


          return false;
        }

      });

      // вернуться в предыдущую подкатегорию
      $(document).on('click', '.menu-full-catalog__head .btn-back', function () {

        // добавляем метку в предыдущее меню
        $('.menu-full-catalog__main_current')
          .parent()
          .parent()
          .addClass('menu-full-catalog__main_previous');

        // скрываем текущее активное меню
        $('.menu-full-catalog__main_current')
          .removeClass('menu-full-catalog__main_active');

        // удаляем текущую метку
        $('.menu-full-catalog__main_current')
          .removeClass('menu-full-catalog__main_current');

        // предыдущее меню делаем активным
        $('.menu-full-catalog__main_previous')
          .find('.menu-full-catalog__main_passive')
          .removeClass('menu-full-catalog__main_passive');

        // добавляем метку текущего меню к предыдущему меню
        $('.menu-full-catalog__main_previous')
          .addClass('menu-full-catalog__main_current');

        // удаляем метку предыдущего меню у текущего меню
        $('.menu-full-catalog__main_current')
          .removeClass('menu-full-catalog__main_previous');

        // узнаем высоту текущей подкатегории
        let height_ul = $('.menu-full-catalog__main_current').innerHeight();

        // присваиваем высоту фону
        $('.menu-full-catalog__main').css('height', height_ul);

        if ($('.menu-full-catalog__main_current').hasClass('menu-full-catalog__main')) {
          $('.menu-full-catalog__main').css('height', main_height_ul);

          // скрыть кнопку назад
          $(this)
            .addClass('menu-full-catalog__hidden');

          // отобразить заголовок
          $(this)
            .parents('.menu-full-catalog')
            .find('.menu-full-catalog__title')
            .removeClass('menu-full-catalog__hidden');

        }

      });

      $(document).on('click', '.form-select-city__custom-select a', function () {
        let value_city = $(this).html();
        $(this)
          .parents('.form-select-city')
          .find('.form-select-city__input')
          .val(value_city);
        return false;
      });

      $(document).on('click', '.wrap-mobile-search__ico', function () {
        $('.mobile-search').addClass('mobile-search_active');
      });

      $(document).on('keypress', '.search-form__inpuut', function (e) {
        if (e.which !== 32) {
          $(this)
            .parents('.search-form')
            .find('.search-options')
            .addClass('search-options_active');
          $(this)
            .parents('.search-form')
            .find('.search-form__close')
            .addClass('search-form__close_active');
        }
      });

      $(document).on('click', '.search-form__close', function () {
        $(this)
          .parents('.search-form')
          .find('.search-options')
          .removeClass('search-options_active');
        $(this)
          .parents('.search-form')
          .find('.search-form__inpuut')
          .val('');
        $(this).removeClass('search-form__close_active');
      });

    },
  };
})(jQuery, window.APP);
