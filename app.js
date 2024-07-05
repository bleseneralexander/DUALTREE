// Using IIFE for Implementing Module Pattern to keep the Local Space for the JS Variables
(function() {
    // Enable pusher logging - don't include this in production
    Pusher.logToConsole = true;

    var serverUrl = "/",
        comments = [],
        pusher = new Pusher('Sy2wvV9xgxnjKuGAQ5bTWWZF5NwJj0b2lC5QYLZZXkQ', {
          cluster: 'ap2',
          encrypted: true
        }),
        // Subscribing to the 'flash-comments' Channel
        channel = pusher.subscribe('flash-comments');
var commentForm = document.getElementById('comment-form');

// Adding to Comment Form Submit Event
commentForm.addEventListener("submit", addNewComment);
})();
