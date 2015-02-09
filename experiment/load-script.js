/* _optimizely_evaluate=force */
/**
 * Async Load script w/ callback.
 * Works in IE9+
 * ```
 *    clearhead.loadScript(
 *      '//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js',
 *      function (){ alert(typeof window.$) }
 *    );
 * ```
 */
window.clearhead = window.clearhead || {};
window.clearhead.loadScript = function (url, callback) {
  'use strict';
  var ga = document.createElement('script');
  ga.type = 'text/javascript';
  ga.async = true;
  ga.src = url;
  if (typeof callback === 'function') {
    ga.onload = callback;
  }
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(ga, s);
};
/* _optimizely_evaluate=safe */
