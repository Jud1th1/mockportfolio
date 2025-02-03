// Step 1: Select the button and sidebar
const button = document.querySelector(".toggleButton");
const sidebar = document.querySelector(".side-bar");
const closeButton = document.querySelector(".closeButton");
const sidebarLinks = document.querySelectorAll('.side-bar a');
const toggleButtons = document.querySelectorAll(".nav-bar i, .side-bar i:not(.closeButton i)"); //exclude close button

// Step 2: Add an event listener to toggle the sidebar when the button is clicked
button.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});

closeButton.addEventListener("click", () => {
    sidebar.classList.remove("active");
});

// Step 3: Close sidebar when clicking outside of it
document.addEventListener("click", (event) => {
    if (!sidebar.contains(event.target) && !button.contains(event.target)) {
        sidebar.classList.remove("active"); // Hide the sidebar
    }
});

// Step 4: Loop through each sidebar link
sidebarLinks.forEach(link => {
    // Add event listener to each link
    link.addEventListener('click', () => {
        // Close the sidebar by removing the 'active' class
        sidebar.classList.remove('active');
    });
});


//**********************DARKMODE/LIGHTMODE JS********************************//
// Function to toggle dark mode and update profile picture
function toggleTheme() {
    document.body.classList.toggle("dark-mode"); // Toggle dark mode class

    // Select profile picture
    const profilePic = document.getElementById("profilepic");

    // Swap images based on dark mode
    if (document.body.classList.contains("dark-mode")) {
        profilePic.src = "content/ProfilePic.png"; // Dark mode image
        toggleButtons.forEach(icon => icon.classList.replace("fa-moon", "fa-sun")); // Change icon to sun
    } else {
        profilePic.src = "content/Purpleprofilepic.png"; // Light mode image
        toggleButtons.forEach(icon => icon.classList.replace("fa-sun", "fa-moon")); // Change icon to moon
    }

    // Store theme preference
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
}

// Ensure correct theme and profile picture on page load
document.addEventListener("DOMContentLoaded", () => {
    // Check the stored theme preference
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        document.getElementById("profilepic").src = "content/ProfilePic.png"; // Dark mode image
        toggleButtons.forEach(icon => icon.classList.replace("fa-moon", "fa-sun")); // Change icon to sun
    } else {
        document.body.classList.remove("dark-mode");
        document.getElementById("profilepic").src = "content/Purpleprofilepic.png"; // Light mode image
        toggleButtons.forEach(icon => icon.classList.replace("fa-sun", "fa-moon")); // Change icon to moon
    }
});

// Add event listener to toggle button
toggleButtons.forEach(button => button.addEventListener("click", toggleTheme));