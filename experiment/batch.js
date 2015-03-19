/*
Batch an array into chunks of size n
  E.g.:
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var chunks = batch(arr, 3); => [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]];
*/

var batch = function(a, n) {
  var batches = [];

  var begIdx = 0, endIdx = n;
  while (begIdx < a.length) {
    batches.push(a.slice(begIdx, endIdx));
    begIdx += n;
    endIdx += n;
  }

  return batches;
};
