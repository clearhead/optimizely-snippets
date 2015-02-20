/* http://developers.optimizely.com/samples/#sticky-navigation-bar
 * Usage
 *    Pass in the ID of an element whose position you want fixed once
 *    the visitor scrolls past the element's initial position.
 *    If the visitor scrolls up again, the element will take on its
 *    original position.
 *
 * @param {String} id - The CSS ID of the element you want to have
 *                       fixed position.
 *
 */

var makeSticky = function(id) {
  var menuOffset = document.getElementById(id).offsetTop;
  var docScroll = $(document).scrollTop();
  $(document).bind('ready scroll', function() {
    docScroll = $(document).scrollTop();
    if(docScroll >= menuOffset) {
      $('#'+id).css({'position':'fixed', 'top':'0', 'z-index': '1000'});
    } else {
      $('#'+id).css({'position':'initial','z-index':'0'});
    }
  });
};

// Usage example
makeSticky('mainNavBar');
