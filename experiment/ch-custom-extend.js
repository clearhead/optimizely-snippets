// Extends the window.clearhead object
window.clearhead.extend = function() {
  'use strict';

  var current = this,
      base,
      args = [].slice.call(arguments),
      fn = args.pop(), path = args.pop();

  var extendChain = function() {
    for (var i = 0, len = chain.length; i < len; i++) {
      current = current[chain[i]] = current[chain[i]] || {};
    }
  };

  if (path) {
    var chain = path.split('.');
    extendChain();
    base = this[chain[0]];
  }

  fn.call(current, base);
};

// Sample usage
// Note that exp01 is created if it didn't already exist
window.clearhead.extend('exp01.v1', function(exp01) {
  // base obj (i.e. exp01) passed to callback
  // value of this set to last obj in chain (i.e. v1)
  var v1 = this;

  v1.someMethod = function(){};
});

window.clearhead.exp01.v1.someMethod();
