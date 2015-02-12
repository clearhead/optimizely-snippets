describe('experiment/get-param.js', function() {

  it('can get params', function() {
    expect(window.clearhead.getParam('p', '?p=v')).toBe('v');
  });

});
