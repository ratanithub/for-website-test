// Wait for the document to be fully loaded
$(document).ready(function(){

    // Example: Close the advertisement when the close button is clicked
    $('#close-ad-btn').on('click', function(){
        // Find the closest parent with the ID 'ad-container' and hide it
        // You could also use $(this).closest('.advertisement').parent().hide();
        $('#ad-container').fadeOut('slow'); // Use fadeOut for a smoother effect
    });

    // You can add more jQuery or vanilla JavaScript interactions here
    // For example, handling dynamic content loading, form submissions, etc.

});