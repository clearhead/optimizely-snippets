/* http://developers.optimizely.com/samples/#scroll-depth
 * Usage
 *     Send an Optimizely custom event after a visitor has scrolled to
 *     a certain element on the page.  Note that the entire element
 *     must be displayed for this to function properly.
 *
 *  @param {String} element   - The jQuery selector for the element to
 *                              trigger the call.
 *  @param {String} eventName - The name of the custom event to send
 *                              to Optimizely.
 *
 */

window.TrackScrolling = function(element, eventName) {
  this.element = element;
  this.eventName = eventName;
  this.hasBeenSent = false;
  var self = this;
  window.$(window).scroll(function() {
    self.checkScroll();
  });
  this.isScrolledIntoView = function() {
    var docViewTop = window.$(window).scrollTop(),
      docViewBottom = docViewTop + window.$(window).height(),
      docViewAvg = (docViewTop + docViewBottom) / 2,
      elemTop = window.$(self.element).offset().top,
      elemBottom = elemTop + window.$(self.element).height(),
      elemAvg = (elemTop + elemBottom) / 2;
    return (elemBottom <= docViewBottom);
  };
  this.checkScroll = function() {
    if (!this.hasBeenSent && this.isScrolledIntoView()) {
      window.optimizely = window.optimizely || [];
      window.optimizely.push(['trackEvent', this.eventName]);
      this.hasBeenSent = true;
    }
  };
};

// Usage Example
var scrollMyDiv = new TrackScrolling('#myDiv', 'scrolled_to_mydiv');
var scrollBottom = new TrackScrolling('.footer', 'scrolled_to_bottom');
