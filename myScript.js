// Step 1: Select the button and sidebar
const button = document.querySelector(".toggleButton");
const sidebar = document.querySelector(".side-bar");

// Step 2: Add an event listener to toggle the sidebar when the button is clicked
button.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});S