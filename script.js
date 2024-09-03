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

    // Clear input fields after submission
    document.getElementById('userMessage').value = '';
    document.getElementById('userSender').value = '';
}

// Function to start confetti animation (if you want to add this feature)
function startConfetti() {
    // Add your confetti animation logic here
    console.log('Confetti animation started!'); // Placeholder for actual animation code
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
    startConfetti();
    showSlideshow();
};
