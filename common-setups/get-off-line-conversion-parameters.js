/* http://developers.optimizely.com/samples/#get-off-line-conversion-parameters
 * Usage
 *    Loops through the Optimizely Data Object to return the
 *    information necessary to construct the off-line conversions URL.
 *
 */

// grab the endUserID from the Optimizely Cookie
var endUserId = document.cookie.match('optimizelyEndUserId=([^;]*)')[1];

for (var i = 0; i < optimizely.activeExperiments.length; i++) {
  var experimentID = optimizely.activeExperiments[i];
  var variationID = optimizely.variationIdsMap[experimentID];
  var variationName = optimizely.variationNamesMap[experimentID];
  // code to pass this data to your backend should go here
}
