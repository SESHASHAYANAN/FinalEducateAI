

const applyBtn = document.getElementById('applyBtn');
const browseBtn = document.getElementById('browseBtn');
const fileInput = document.getElementById('fileInput');
const selectedFile = document.getElementById('selectedFile');

// Change Apply button text and color when clicked
applyBtn.addEventListener('click', function() {
    this.textContent = "Applied!";
    this.classList.add('applied');
    this.disabled = true; // Disable the button after applying
});

// File input trigger when clicking on the label
document.querySelector('.file-label').addEventListener('click', function() {
    fileInput.click(); // Simulates the file input being clicked
});

// Show selected file when user picks a document
fileInput.addEventListener('change', function() {
    const fileName = fileInput.files[0].name; // Get the selected file name
    selectedFile.textContent = fileName; // Display the selected file name
});

// When "Browse Submissions" is clicked, display the file name if available
browseBtn.addEventListener('click', function() {
    if (fileInput.files.length > 0) {
        alert("You selected: " + fileInput.files[0].name); // Alert with the file name
    } else {
        alert("No file selected.");
    }
});
