(function() {
  function getCookie(name) {
    var pattern = new RegExp(name + "=.[^;]*");
    var matched = document.cookie.match(pattern);
    if (matched) {
      var cookie = matched[0].split('=');
      if (typeof cookie[1] === 'number') {
        return cookie[1];
      }
    }
    return false;
  }
  if (!getCookie('csid')) {
    window.csid = parseInt('346051544');
    document.cookie = 'csid=' + window.csid + ';path=/;expires=Fri, 31 Dec 9999 23:59:59 GMT;max-age=157680000;';
  } else {
    window.csid = getCookie('csid');
  }
})();
