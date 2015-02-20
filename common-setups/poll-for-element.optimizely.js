// http://developers.optimizely.com/samples/#poll-for-element
/*
 * Usage
 *    This function is a recursive setTimeout of 50ms that polls for an element matching the selector in the if statement.
 */

 var pollForElement = function() {
   if ($('#SELECTOR').length > 0) {
   // code to run once element is found on page
   }
   else {
     setTimeout(pollForElement, 50);
   }
 };
 pollForElement();
