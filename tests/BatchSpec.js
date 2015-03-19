describe('experiment/batch.js', function() {

  it('batches as expected', function() {

    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var chunks = batch(arr, 3);

    expect(chunks).toEqual(
      [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]
    );

  });

});

