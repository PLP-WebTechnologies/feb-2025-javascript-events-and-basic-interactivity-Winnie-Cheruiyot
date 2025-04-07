// Event listener for form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Basic validation
    if (name === "" || email === "" || message === "") {
        document.getElementById('formError').textContent = "All fields are required.";
    } else {
        document.getElementById('formError').textContent = "";
        alert("Form submitted successfully!");
        // You can add AJAX here for real submission
    }
});

// Add task functionality
document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput').value;
    if (taskInput !== "") {
        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');
        li.textContent = taskInput;
        taskList.appendChild(li);
        document.getElementById('taskInput').value = ""; // Clear input field
    }
});

// Example of adding event listener to a menu item image
const menuImages = document.querySelectorAll('.menu-images img');
menuImages.forEach(image => {
    image.addEventListener('click', function() {
        alert("You clicked on " + image.alt);
    });
});


