// http://developers.optimizely.com/samples/#load-external-javascript
/*
 * Usage
 *    This function will append an external JavaScript to the head of the document.
 *
 *  @param {String} location - The location of the file you'd like to load.
 *  @param {Function} callback - [OPTIONAL] A function to call when the script has completed downloading.
 *
 */

 var loadScript = function(location, callback){
   var fileRef = document.createElement('script');
   fileRef.setAttribute('type','text/javascript');

   if (callback) {
     if (fileRef.readyState) {  // IE
       fileRef.onreadystatechange = function() {
         if (fileRef.readyState == 'loaded' || fileRef.readyState == 'complete') {
           fileRef.onreadystatechange = null;
           callback();
         }
       };
     } else {  // Non-IE
       fileRef.onload = function(){
         callback();
       };
     }
   }

   fileRef.setAttribute('src', location);
   document.head.appendChild(fileRef);
 };

 loadScript('http://www.example.com/test.js', function() {
   // CALLBACK - code that does something with the data returned by loading the script
 });
