// http://developers.optimizely.com/samples/#track-clicks-on-dynamic-content
/*
 *  Usage
 *    Track clicks on elements loaded after DOM ready.  The .delegate() method allows you to select all current and future elements that match the selector passed in as the first argument.
 *
 */

 var selector = [YOUR_SELECTOR]; //provide the element selector as a string
 var eventName = [YOUR_EVENT_NAME];  //provide the custom event name

 $('html').delegate(selector, 'mousedown touchend', function() {
   window.optimizely.push(['trackEvent', eventName]);
 });
