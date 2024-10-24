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

document.getElementById('chatbot-open').addEventListener('click', function() {
    document.getElementById('chatbot-container').style.display = 'flex';
    document.getElementById('chatbot-open').style.display = 'none';
});

document.getElementById('chatbot-toggle').addEventListener('click', function() {
    document.getElementById('chatbot-container').style.display = 'none';
    document.getElementById('chatbot-open').style.display = 'block';
});

document.getElementById('send-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== '') {
        addMessage(userInput, 'user-message');
        document.getElementById('user-input').value = '';

        setTimeout(() => {
            botResponse(userInput);
        }, 1000);
    }
});

function addMessage(text, className) {
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('chatbot-message', className);
    messageContainer.textContent = text;
    document.getElementById('chatbot-messages').appendChild(messageContainer);
    document.getElementById('chatbot-messages').scrollTop = document.getElementById('chatbot-messages').scrollHeight;
}

function botResponse(userInput) {
    let botMessage = '';

    if (userInput.toLowerCase().includes('hello')) {
        botMessage = 'Hi there! How can I assist you today?';
    } else if (userInput.toLowerCase().includes('portfolio')) {
        botMessage = 'I can help you learn more about my portfolio and projects.';
    } else {
        botMessage = 'I am still learning! Feel free to ask me about my skills or projects.';
    }

    addMessage(botMessage, 'bot-message');
}

// Add enter key functionality to send message
document.getElementById('user-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('send-btn').click();
    }
});

