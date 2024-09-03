let player;

// YouTube API will call this function when the video player is ready
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtubeVideo');
}

// Function to start the countdown
function startCountdown() {
    let countdownElement = document.getElementById('countdown');
    let messageElement = document.getElementById('message');
    let timeLeft = 20; // 20 seconds countdown

    countdownElement.textContent = `Countdown: ${timeLeft}`;
    messageElement.textContent = '';

    let countdownTimer = setInterval(() => {
        timeLeft -= 1;
        countdownElement.textContent = `Countdown: ${timeLeft}`;

        if (timeLeft <= 0) {
            clearInterval(countdownTimer);
            countdownElement.textContent = '';
            messageElement.textContent = "Happy Birthday, Saayella!";
            playYouTubeVideo();
            startConfetti();
            showSlideshow();
        }
    }, 1000); // Update every second
}

// Function to play the YouTube video
function playYouTubeVideo() {
    if (player && typeof player.playVideo === 'function') {
        player.playVideo();
    } else {
        console.error('YouTube player is not ready.');
    }
}

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

// Function to handle interactive elements
function setupInteractiveElements() {
    const candles = document.getElementsByClassName('candle');
    for (let candle of candles) {
        candle.onclick = () => {
            candle.style.display = 'none'; // Hide candle on click
        };
    }
}

// Start the countdown automatically when the page loads
window.onload = () => {
    startCountdown();
    setupInteractiveElements();
};
