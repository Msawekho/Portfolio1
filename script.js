document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    
    const namePattern = /^[A-Za-z]+$/; // Only allows alphabetic characters
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/; // Simple email format check

    if (!namePattern.test(fname)) {
        alert('First name should only contain letters');
        return;
    }

    if (!namePattern.test(lname)) {
        alert('Last name should only contain letters');
        return;
    }

    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // If validation is successful, show the success message
    document.getElementById('successMessage').style.display = 'block';

    // Reset form after submission
    this.reset();
});
