document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("current-year").textContent = new Date().getFullYear();
});


function confirmSubmission() {
    const userConfirmed = confirm("Thank you for submitting your information! We will contact you soon.");
    return userConfirmed; 
}
