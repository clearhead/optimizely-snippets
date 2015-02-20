// http://developers.optimizely.com/samples/#ajaxcomplete
/*
 *  Usage
 *     Apply variation code when an AJAX request is completed. In this example, we also require the request URL contain the sub-string "/shopping-cart".
 *
 *  @param {Function} handler - A function to execute when the ajaxComplete event is triggered.
 *
 *  e.g. window.$(document).ajaxComplete(handler)
 */

 // Usage example
 window.$(document).ajaxComplete(function(event, xhr, settings) {
   if (settings.url.indexOf('/shopping-cart') > -1) {
     //apply variation code
   }
 });
