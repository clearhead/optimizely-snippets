/* http://developers.optimizely.com/samples/#access-data-on-page
 * Usage
 *    Example showing how to reference a variable defined natively on
 *    the page from inside Optimizely.
 *
 */ /*jshint expr:true*/

// Audience condition example checking the 'category'
// property of the 'exampleObject'
window.exampleObject.category === 'shirts';

// Variation code example injecting the 'visitorName'
// property of the 'exampleObject' in the h3 elements
$('h3').text('Hello,' + window.exampleObject.visitorName);
