// Function to load saved messages from localStorage
function loadMessages() {
    const messagesContainer = document.getElementById('messages');
    const savedMessages = JSON.parse(localStorage.getItem('birthdayMessages')) || [];

    savedMessages.forEach(({ sender, message }) => {
        const newMessage = document.createElement('p');
        newMessage.innerHTML = `<strong>${sender}:</strong> ${message}`; // Display sender and message
        messagesContainer.appendChild(newMessage);
    });
}

// Function to add a personalized message
function addMessage() {
    const userMessage = document.getElementById('userMessage').value.trim();
    const userSender = document.getElementById('userSender').value.trim();

    // Check if both fields are filled
    if (userMessage === "" || userSender === "") {
        alert("Please fill out both the message and your name.");
        return;
    }

    const messagesContainer = document.getElementById('messages');
    const newMessage = document.createElement('p');
    newMessage.innerHTML = `<strong>${userSender}:</strong> ${userMessage}`; // Display sender and message
    messagesContainer.appendChild(newMessage);

    // Save message to localStorage
    const savedMessages = JSON.parse(localStorage.getItem('birthdayMessages')) || [];
    savedMessages.push({ sender: userSender, message: userMessage });
    localStorage.setItem('birthdayMessages', JSON.stringify(savedMessages));

    // Clear input fields after submission
    document.getElementById('userMessage').value = '';
    document.getElementById('userSender').value = '';
}

// Function to start the photo slideshow
function showSlideshow() {
    const slides = document.getElementsByClassName('slide');
    let slideIndex = 0;

    function showNextSlide() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none'; // Hide all slides
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = 'block'; // Show the next slide
        setTimeout(showNextSlide, 2000); // Change slide every 2 seconds
    }

    showNextSlide();
}

// Initialize all features when the page loads
window.onload = () => {
    loadMessages(); // Load saved messages from localStorage
    showSlideshow();
};
