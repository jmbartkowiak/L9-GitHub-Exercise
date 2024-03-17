// validationScript.js
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');
    const inputField = document.getElementById('inputField');
    const errorMessage = document.createElement('div');
    errorMessage.style.color = 'red';
    form.insertBefore(errorMessage, form.firstChild); // Insert the error message at the beginning of the form

    form.addEventListener('submit', function (event) {
        const inputValue = inputField.value;
		
        // Regular expression for alphanumeric input
        const alphanumericRegex = /^[a-z0-9]+$/i;
		
        if (!alphanumericRegex.test(inputValue)) {
            // Invalid input: display error message
            errorMessage.textContent = 'Error: Input must be alphanumeric.';
            event.preventDefault(); 
        } else {
            // Valid input: display confirmation and submit the form
            errorMessage.textContent = ''; 
            alert('Input is valid..');
            // Prevent form submission for demonstration purposes
            event.preventDefault();
        }
    });
});
