// REDO
document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Validation
    let formValid = true;
    const inputs = this.querySelectorAll('input, select');
    inputs.forEach(function(input) {
        if (!input.checkValidity()) {
            formValid = false;
        }
    });

    if (formValid) {
        // Form is valid, you can submit it here
        alert('Form submitted successfully!');
        // this.reset(); // Reset the form after successful submiss
    } else {
        // Form is invalid
        alert('Please fill in all required fields correctly.');
    }
});