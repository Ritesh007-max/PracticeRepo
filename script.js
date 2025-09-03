// Boilerplate JavaScript code

// Function to run when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function)() {
    console.log('Hello, world! The DOM is ready.');
    
    // Your code here
    // Example: Add a click event to a button with id 'myButton'
    const btn = document.getElementById('myButton');
    if (btn) {
        btn.addEventListener('click', function() {
            alert('Button')
        });
    }

}