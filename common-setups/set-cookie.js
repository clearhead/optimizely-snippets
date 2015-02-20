/* http://developers.optimizely.com/samples/#set-cookie
 * Usage
 *    This function will set a cookie on the visitor's browser.
 *
 *  @param {String} name   - The name of the cookie.
 *  @param {String} value  - The value of the cookie.
 *  @param {String} domain - The domain on which this cookie should be
 *                           set and can be read.
 *  @param {Float}  age     - The number of days the cookie should last.
 *
 */

var setCookie = function(name, value, domain, age) {
  var futureDate = new Date(+new Date() + age * 1000);
  var parts = [
    name, '=', encodeURIComponent(value),
    '; domain=.', domain,
    '; path=/',
    '; expires=', futureDate.toUTCString(),
    ';'
  ];
  document.cookie = parts.join('');
};
