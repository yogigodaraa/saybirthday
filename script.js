// Function to add a personalized message
function addMessage() {
    const userMessage = document.getElementById('userMessage').value;
    const messagesContainer = document.getElementById('messages');
    const newMessage = document.createElement('p');
    newMessage.textContent = userMessage;
    messagesContainer.appendChild(newMessage);
    document.getElementById('userMessage').value = ''; // Clear input after submission
}

// Function to start confetti animation
function startConfetti() {
    // Add your confetti animation logic here
    console.log('Confetti animation started!');
}

// Function to start the photo slideshow
function showSlideshow() {
    const slides = document.getElementsByClassName('slide');
    let slideIndex = 0;

    function showNextSlide() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = 'block';
        setTimeout(showNextSlide, 2000); // Change slide every 2 seconds
    }

    showNextSlide();
}

// Initialize all features when the page loads
window.onload = () => {
    startConfetti();
    showSlideshow();
};
