/**
 * Overwrites and curries optimizely.push with alertify based on
 * querystring clearhead-debug=true>=0 || !!getCookie('chdebug');
 */

(function() {
  'use strict';

  // activate when clearhead-debug
  if ((/clearhead-debug$/).test(location.href)) {
    setCookie('chdebug', 'true', 365);
  } else if ((/clearhead-debug=false/).test(location.href)) {
    setCookie('chdebug', 'true', -1); // delete cookie && return
    return;
  } else if (!getCookie('chdebug')) {
    return;
  }

  window.clearhead = window.clearhead || {};
  window['optimizely'] = window['optimizely'] || [];
  window['optimizely'].push(["log"]);

  window.alertifyQueue = [];

  (function() {
    var oldLog = window.console.log;
    window.console.log = function(message) {
      alertifyQueue.push(message);
      oldLog.apply(console, arguments);
    };
  })();

  loadCss('https://cdnjs.cloudflare.com/ajax/libs/alertify.js/0.3.11/alertify.core.css');
  loadCss('https://cdnjs.cloudflare.com/ajax/libs/alertify.js/0.3.11/alertify.default.css');
  (function load(){
    if (!document.body) return setTimeout(load, 50);
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/alertify.js/0.3.11/alertify.min.js',
      function () {
        alertify.set({
          delay: 10000
        });
        optimizely.$.each(optimizely.variationNamesMap, function(k, v) {
          alertifyQueue.shift([optimizely.allExperiments[k], v].join(': '));
        });
        optimizely.$('head').append([
          '<style>',
          '#alertify-logs{top:0px;left:auto;height:auto;width:500px;text-align:left}',
          '.alertify-log-success{background:#24ccfb;color:#fff;font-size:16px;text-align:left}',
          '.alertify-log-error{background:#fc7e23;color:#fff;font-size:16px;text-align:left}',
          '</style>'
        ].join(''));
        alertifyQueue.forEach(log);
        alertifyQueue.push = log;
      });
  })();


  function log() {
    var arg = arguments[0];
    if (!arg || arg.indexOf('Optimizely')!=0) return;
    arg = arg.substr('Optimizely / '.length);
    (/API \/ Tracking/).test(arg) &&
      window.alertify.success(arg);
    (/Tracker \/ Tracking/).test(arg) &&
      window.alertify.success(arg);
    (/Evaluator \/ Bound event/).test(arg) &&
      window.alertify.error(arg);
    (/API \/ Called/).test(arg) &&
      window.alertify.error(arg);
  }

  function setCookie(name, value, optDays) {
    var expires = '';
    if (optDays) {
      var date = new Date();
      date.setTime(date.getTime() + (optDays * 24 * 60 * 60 * 1000));
      expires = '; expires=' + date.toGMTString();
    }
    document.cookie = name + '=' + value + expires + '; path=/';
  }

  function getCookie(name) {
    var nameEQ = name + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  function loadScript(url, callback) {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = url;
    if (typeof callback === 'function') {
      ga.onload = callback;
    }
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
  }

  function loadCss(url) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = url;
    link.media = 'all';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(link, s);
  }

})();
