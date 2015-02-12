describe('experiment/cookie.js', function() {

  it('can get and set cookies', function() {
    document.cookie = 'c=v1';
    expect(window.clearhead.getCookie('c')).toBe('v1');
    window.clearhead.setCookie('c', 'v2');
    expect(window.clearhead.getCookie('c')).toBe('v2');
  });

});
