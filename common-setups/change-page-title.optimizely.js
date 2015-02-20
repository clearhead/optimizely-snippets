// http://developers.optimizely.com/samples/#change-page-title
/*
 * Usage
 *   The following code will modify the title of the browser tab on the "blur" event and change it back to the original on the "focus" event.
 *
 */

 // store the original tab title
 var origTitle = document.title;

 // function to change title when focusing on tab
 function oldTitle() {
   document.title = origTitle;
 }

 // function to change title when un-focusing on tab
 function newTitle() {
   document.title = 'HELLO WORLD';
 }

 // bind functions to blur and focus events
 window.onblur = newTitle;
 window.onfocus = oldTitle;
