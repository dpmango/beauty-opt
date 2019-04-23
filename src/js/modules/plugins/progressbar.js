//////////
// progressbar
//////////
(function($, APP) {
  APP.Plugins.Progressbar = {
    data: {
      bullets: {
        mainSlider: [],
      },
    },
    init: function() {
      var _this = this;
      var $bullets = $('.swiper-pagination__main-slider .swiper-pagination-bullet');

      if ($bullets.length === 0) {
        return;
      }

      $bullets.each(function(i, bullet) {
        var bar = new ProgressBar.Circle(bullet, {
          strokeWidth: 6,
          easing: 'linear',
          duration: 4000,
          color: '#EDBA36',
          // trailColor: 'transparent',
          // trailWidth: 1,
          // svgStyle: null,
        });

        _this.data.bullets.mainSlider.push(bar);
      });

      // initial start
      this.animateBullets('mainSlider', 0);
    },
    animateBullets: function(name, curIndex) {
      var bullets = this.data.bullets[name];

      $.each(bullets, function(i, bullet) {
        if (curIndex === i) {
          bullet.animate(1);
        } else {
          bullet.animate(0, {
            duration: 150,
          });
        }
      });
    },
    destroy: function() {
      // ... code ...
    },
  };
})(jQuery, window.APP);
