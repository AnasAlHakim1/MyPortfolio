document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting via the browser
    
    // Validate form inputs
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill in all fields.');
        return;
    }
    
    // You can add further validation for the email format if needed
    
    // Submit the form (you can replace this with your desired action)
    alert('Form submitted successfully!');
    
    // Clear the form fields
    document.getElementById('contactForm').reset();
});

