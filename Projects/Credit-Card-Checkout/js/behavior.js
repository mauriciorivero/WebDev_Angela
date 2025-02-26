// Select the form element
const form = document.getElementById('translucentForm');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent actual form submission

    // Get the submit button
    const submitButton = form.querySelector('button');

    // Disable the button and add a loading animation
    submitButton.disabled = true;
    submitButton.textContent = 'Submitting...';
    submitButton.style.backgroundColor = '#0056b3';

    // Simulate form submission delay
    setTimeout(() => {
        submitButton.textContent = 'Submitted!';
        submitButton.style.backgroundColor = '#28a745'; // Change to success color

        // Reset the form after a short delay
        setTimeout(() => {
            form.reset();
            submitButton.textContent = 'Submit';
            submitButton.disabled = false;
            submitButton.style.backgroundColor = '#007BFF';
        }, 2000); // Reset after 2 seconds
    }, 2000); // Simulate a 2-second submission process
});