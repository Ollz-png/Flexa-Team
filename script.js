// Array of random messages
const messages = [
    "Stay curious and keep coding!",
    "Innovation starts with a single idea.",
    "Collaboration brings out the best in us.",
    "Keep pushing the boundaries of creativity!",
    "Every project is a step toward mastery.",
    "Dream big, code bigger!",
    "Success is the sum of small efforts, repeated day in and day out."
];

// Function to display a random message
function displayRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    const messageElement = document.getElementById("random-message");
    messageElement.textContent = messages[randomIndex]; // Set the random message
}

// Function to toggle the download menu
function toggleMenu(menuId) {
    const menu = document.getElementById(menuId);
    playSound('click'); // Play click sound effect
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block"; // Show the menu
    } else {
        menu.style.display = "none"; // Hide the menu
    }
}

// Function to download source files
function downloadSource(fileName) {
    const link = document.createElement('a');
    link.href = fileName; // Link to the file
    link.download = fileName; // Set the file name for download
    document.body.appendChild(link); // Append link to the body
    link.click(); // Trigger click to download
    document.body.removeChild(link); // Remove link after downloading
}

// Function to handle game downloads
function downloadGame(htmlFile) {
    // Prompt user for their download choice
    const choice = prompt("Choose a download format:\n1. HTML\n2. EXE");
    if (choice === "1") {
        downloadSource(htmlFile); // Download HTML file
    } else {
        alert("Invalid choice."); // Alert if input is invalid
    }
}

// Function to play sound effects
function playSound(soundName) {
    const audio = new Audio(`Sounds/${soundName}.wav`); // Create a new audio instance
    audio.play(); // Play the audio
}

// Play background music on page load
window.onload = function() {
    displayRandomMessage();
    document.getElementById("background-music").play(); // Start playing background music
};
