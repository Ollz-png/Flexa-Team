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
    const overlay = document.getElementById("overlay");

    if (menu.style.display === "none" || menu.style.display === "") {
        overlay.style.display = "flex"; // Show overlay
        menu.style.display = "block"; // Show the menu
    } else {
        closeAllMenus(); // Close the menu if it’s already open
    }
}

// Function to close all menus
function closeAllMenus() {
    const menus = document.querySelectorAll('.download-menu');
    const overlay = document.getElementById("overlay");

    menus.forEach(menu => {
        menu.style.display = "none"; // Hide all menus
    });
    overlay.style.display = "none"; // Hide overlay
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

// Display a random message on page load
window.onload = displayRandomMessage;
