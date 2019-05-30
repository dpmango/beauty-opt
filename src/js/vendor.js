// import $ from 'jquery';
import svg4everybody from 'svg4everybody';
import picturefill from 'picturefill';
import viewportUnitsBuggyfill from 'viewport-units-buggyfill';
import Swiper from 'swiper';
import fancybox from '@fancyapps/fancybox';
import ui_slider from 'jquery-ui/ui/widgets/slider';
import jquery_ui_touch_punch from 'jquery-ui-touch-punch';
import ProgressBar from 'progressbar.js';
import AOS from 'aos';
import scrollMonitor from 'scrollmonitor';
import validate from 'jquery-validation';
import mask from 'jquery-mask-plugin';
import selectric from 'jquery-selectric';
import Barba from 'barba.js';
import Lazy from 'jquery-lazy';
import TweenMax from 'gsap/TweenMax';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import debounce from 'lodash/debounce';
import throttle from 'lodash/throttle';
import easy_autocomplete from 'easy-autocomplete';
import Waypoints from 'waypoints/lib/jquery.waypoints.min.js';
import Sticky from 'waypoints/lib/shortcuts/sticky.min.js';

// expose imports to window to use in app.js
// (jquery is exposed in expose-loader)
// window.jQuery = $;
// window.$ = $;
window.svg4everybody = svg4everybody;
window.picturefill = picturefill;
window.viewportUnitsBuggyfill = viewportUnitsBuggyfill;
window.Swiper = Swiper;
window.fancybox = fancybox;
window.ui_slider = ui_slider;
window.jquery_ui_touch_punch = jquery_ui_touch_punch;
window.ProgressBar = ProgressBar;
window.AOS = AOS;
window.scrollMonitor = scrollMonitor;
window.validate = validate;
window.mask = mask;
window.selectric = selectric;
window.Barba = Barba;
window.Lazy = Lazy;
window.ScrollToPlugin = ScrollToPlugin;
window.TweenMax = TweenMax;
window.debounce = debounce;
window.throttle = throttle;
window.easy_autocomplete = easy_autocomplete;
window.Waypoints = Waypoints;
window.Sticky = Sticky;
