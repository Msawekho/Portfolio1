// Form validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;

    const namePattern = /^[A-Za-z]+$/;
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

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
    

    document.getElementById('successMessage').style.display = 'block';
    this.reset();
});

// Icon hover function
function changeIcon(isHover) {
    const icon = document.getElementById('chatbotIcon');
    const hoverText = document.getElementById('hoverText');
    if (isHover) {
        icon.classList.replace('fa-comments', 'fa-pen-to-square');
        hoverText.style.display = 'block';
    } else {
        icon.classList.replace('fa-pen-to-square', 'fa-comments');
        hoverText.style.display = 'none';
    }
}

// Toggle chatbot window
function toggleChatbot() {
    const chatbotWindow = document.getElementById("chatbotWindow");
    if (chatbotWindow.classList.contains("open")) {
        chatbotWindow.classList.remove("open");
        setTimeout(() => chatbotWindow.style.display = "none", 400); // Delay to match fade-out effect
    } else {
        chatbotWindow.style.display = "flex";
        setTimeout(() => chatbotWindow.classList.add("open"), 10); // Small delay for smooth start
    }
}

// Send message function
function sendMessage(event) {
    if (event.type === 'keypress' && event.key !== 'Enter') return;

    const userInput = document.getElementById('userInput');
    const chatMessages = document.getElementById('chatMessages');

    if (userInput.value.trim()) {
        // Display user's message
        const userMessage = document.createElement('div');
        userMessage.classList.add('message', 'user-message');
        userMessage.textContent = userInput.value;
        chatMessages.appendChild(userMessage);

        // Generate bot's response
        const botMessage = document.createElement('div');
        botMessage.classList.add('message', 'bot-message');
        botMessage.textContent = generateResponse(userInput.value); // Generate dynamic response
        chatMessages.appendChild(botMessage);

        chatMessages.scrollIntoView({ behavior: 'smooth', block: 'end' });
        userInput.value = '';
    }
}
function toggleReadMore() {
    const moreText = document.querySelector('.more-text');
    const btnText = document.getElementById('read-more-btn');
    
    if (moreText.style.display === "none") {
        moreText.style.display = "block";
        btnText.innerText = "Read Less";
    } else {
        moreText.style.display = "none";
        btnText.innerText = "Read More";
    }
}


// Analyze the user's message and return an appropriate response
function generateResponse(message) {
    message = message.toLowerCase();

    if (message.includes("skills") || message.includes("technologies") || message.includes("experience")) {
        return "I have experience in JavaScript, Java, Kotlin, PHP, and C#, with expertise in both front-end and back-end development!";
    }
    else if (message.includes("about") || message.includes("yourself") || message.includes("who")) {
        return "Hello! My name is Hlanganani Hlongwane, and my journey into the world of technology began in high school, where I developed a strong interest in both technical and mechanical fields. After high school, I gained 1 year of hands-on experience as a CNC programmer, operator, and setter. This role sharpened my precision, problem-solving, and technical skills in a manufacturing environment.";
    }
    else if (message.includes("school") || message.includes("education") || message.includes("carrie")) {
        return "I finished Matrci, did CNC Programming then after, I did a 3-year diploma in Software Development at IIE Rosebank college.";
    } 
    else if (message.includes("projects") || message.includes("portfolio")) {
        return "You can check out my projects on this portfolio, including my work on an online church platform and a donation site.";
    } 
    else if (message.includes("contact") || message.includes("email")) {
        return "Feel free to reach out via email at hlanganani.hlongwane@ capaciti.org.za or connect on LinkedIn!";
    } 
    else {
        return "Hello! How can I assist you today?";
    }
}
