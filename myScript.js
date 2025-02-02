// Step 1: Select the button and sidebar
const button = document.querySelector(".toggleButton");
const sidebar = document.querySelector(".side-bar");
const closeButton = document.querySelector(".closeButton");
const sidebarLinks = document.querySelectorAll('.side-bar a');
const toggleButtons = document.querySelectorAll(".fa-moon, .fa-sun"); // Select moon & sun icons

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
// Step 2(Dark Mode). Function to toggle the theme
function toggleTheme() {
    document.body.classList.toggle("dark-mode"); // Toggle dark mode class

    if (document.body.classList.contains("dark-mode")) {
        toggleButtons.forEach(icon => icon.classList.replace("fa-moon", "fa-sun")); // Change all icons
        localStorage.setItem("theme", "dark"); // Store preference
    } else {
        toggleButtons.forEach(icon => icon.classList.replace("fa-sun", "fa-moon")); // Change all icons back
        localStorage.setItem("theme", "light"); // Store preference
    }
}

// Step 3. Add event listener to the toggle button
toggleButtons.forEach(button => button.addEventListener("click", toggleTheme));

// Step 4: Check user preference on page load
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggleButtons.forEach(icon => icon.classList.replace("fa-moon", "fa-sun")); // Set correct icon
}


function toggleTheme() {
    document.body.classList.toggle('dark-mode');

    // Select profile picture
    const profilePic = document.getElementById("profilepic");

    // Swap images based on dark mode
    if (document.body.classList.contains("dark-mode")) {
        profilePic.src = "content/ProfilePic.png"; // Dark mode image
    } else {
        profilePic.src = "content/Purpleprofilepic.png"; // Light mode image
    }

    // Store theme preference
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
}

// Check user preference on page load
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    document.getElementById("profilepic").src = "content/ProfilePic.png";
}
