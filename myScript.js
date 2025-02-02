// Step 1: Select the button and sidebar
const button = document.querySelector(".toggleButton");
const sidebar = document.querySelector(".side-bar");
const closeButton = document.querySelector(".closeButton");

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

/* Test closing sidebar nav when a linked is clicked

// Select the sidebar links and the sidebar
const sidebarLinks = document.querySelectorAll('.side-bar a');
const sidebar = document.querySelector('.side-bar');

// Loop through each sidebar link
sidebarLinks.forEach(link => {
    // Add event listener to each link
    link.addEventListener('click', () => {
        // Close the sidebar by removing the 'active' class
        sidebar.classList.remove('active');
    });
});

*/