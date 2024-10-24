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

let allCommits = []; // Store all fetched commits

// Function to display a random message
function displayRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    const messageElement = document.getElementById("random-message");
    messageElement.textContent = messages[randomIndex]; // Set the random message
}

// Function to fetch and display commits
async function fetchCommits() {
    const repo = 'Ollz-png/Flexa-Team'; // Your GitHub repo
    const url = `https://api.github.com/repos/${repo}/commits`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch commits');

        allCommits = await response.json(); // Store all commits
        displayCommits(allCommits.slice(0, 5)); // Display recent commits by default
    } catch (error) {
        console.error('Error fetching commits:', error);
        const commitList = document.getElementById('commit-list');
        commitList.innerHTML = '<li>Error loading commits. Please try again later.</li>';
    }
}

// Function to display commits in the list
function displayCommits(commits) {
    const commitList = document.getElementById('commit-list');
    commitList.innerHTML = ''; // Clear existing commits

    // Loop through the commits and display them
    commits.forEach(commit => {
        const listItem = document.createElement('li');
        const avatarImg = document.createElement('img');
        avatarImg.src = commit.author.avatar_url; // User avatar
        avatarImg.alt = commit.commit.author.name; // Alt text for the image
        avatarImg.className = 'commit-avatar'; // Add class for styling

        // Create a link for the commit message
        const commitLink = document.createElement('a');
        commitLink.href = commit.html_url; // URL of the commit
        commitLink.target = '_blank'; // Open in a new tab
        commitLink.textContent = commit.commit.message; // Commit message

        // Create a span for author name and date
        const commitDetails = document.createElement('span');

        // Define options for date formatting
        const options = {
            year: '2-digit', // 'numeric' or '2-digit'
            month: '2-digit', // 'numeric', '2-digit', 'long', etc.
            day: '2-digit', // 'numeric' or '2-digit'
            hour: '2-digit', // 'numeric' or '2-digit'
            minute: '2-digit', // 'numeric' or '2-digit'
            hour12: true // Use 12-hour format if true, otherwise 24-hour
        };

        // Get the formatted date and time
        const formattedDate = new Date(commit.commit.author.date).toLocaleDateString(undefined, options);

        // Set the text content with the date and time
        commitDetails.textContent = `⠀by ${commit.commit.author.name} on ${formattedDate}`;

        // Append elements to the list item
        listItem.appendChild(avatarImg); // Append avatar
        listItem.appendChild(commitLink); // Append commit link
        listItem.appendChild(commitDetails); // Append commit details
        commitList.appendChild(listItem); // Append list item to the list
    });
}

function toggleMenu(menuId) {
    const menu = document.getElementById(menuId);
    const overlay = document.getElementById('overlay');
    
    // Toggle the display of the menu
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
        overlay.style.display = 'block'; // Show overlay when the menu is open
    } else {
        menu.style.display = 'none';
        overlay.style.display = 'none'; // Hide overlay when the menu is closed
    }
}

// Close all menus if overlay is clicked
function closeAllMenus() {
    const menus = document.querySelectorAll('.download-menu');
    menus.forEach(menu => {
        menu.style.display = 'none';
    });
    document.getElementById('overlay').style.display = 'none';
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
    fetchCommits(); // Fetch commits when the page loads
};

// Event listeners for buttons to show commits
document.getElementById('show-all-commits').addEventListener('click', () => {
    displayCommits(allCommits); // Display all commits
});

document.getElementById('show-recent-commits').addEventListener('click', () => {
    displayCommits(allCommits.slice(0, 5)); // Display recent commits
});
