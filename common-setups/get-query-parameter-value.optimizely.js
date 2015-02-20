// http://developers.optimizely.com/samples/#get-query-parameter-value
/*
 * Usage
 *    This function takes a query parameter name and returns its value.
 *
 *  @param {String} name - The name of the query parameter, whose value you want returned.
 */

 var getQueryParam = function(name) {
   var match = window.location.search.match(name + '=([^&]*)');
   return match ? match[1] : undefined;
 }

 // example showing the function called, with the return value inserted in the first h1 element
 $('h1:eq(0)').text(getQueryParam('myParam'));
