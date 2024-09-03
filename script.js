body {
    font-family: Arial, sans-serif;
    background-color: #000; /* Adds a background color */
    height: 100vh;
    margin: 0;
    overflow: hidden;
    position: relative; /* Position the body for absolute positioning of the slideshow */
}

.background-overlay {
    position: fixed; /* Keeps the background overlay fixed */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6); /* Slightly dark overlay to enhance readability */
    z-index: 1; /* Layer the background below the content */
}

.container {
    position: relative; /* Position container on top of background */
    text-align: center;
    background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent background to make text readable */
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    z-index: 2; /* Ensure content stays above the overlay */
}

h1, h2 {
    color: #ff4081;
    margin-bottom: 20px;
}

#message-form {
    margin-top: 20px;
    z-index: 2; /* Ensure form stays above the overlay */
}

#message-form input {
    padding: 10px;
    margin: 5px 0;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: calc(100% - 22px); /* Adjust width to ensure proper spacing */
}

#message-form button {
    padding: 10px 20px;
    font-size: 16px;
    color: #fff;
    background-color: #ff4081;
    border: none;
    border-radius: 5px;
    margin-top: 10px;
    cursor: pointer;
    z-index: 2; /* Ensure button stays above the overlay */
}

#message-form button:hover {
    background-color: #e73170;
}

#messages {
    margin-top: 20px;
    max-height: 150px;
    overflow-y: auto;
    padding: 10px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    z-index: 2; /* Ensure messages stay above the overlay */
}

.slideshow-container {
    position: fixed; /* Keeps the slideshow fixed in the background */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0; /* Place slideshow under the overlay */
}

.slide {
    width: 100%; /* Adjust the width of the slides to fill the container */
    height: 100vh; /* Keeps the aspect ratio of the images */
    object-fit: cover; /* Ensures the image covers the entire container */
    display: none; /* Hide all slides by default */
    position: absolute; /* Position slides absolutely for overlap */
}

/* Style for memory timeline, if any */
#timeline {
    margin-top: 20px;
    text-align: left;
    color: #333;
    z-index: 2; /* Ensure timeline stays above the overlay */
}
