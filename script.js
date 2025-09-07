// Show welcome message when page loads
window.onload = function() {
  alert("Welcome to Sri Rajeshwara Colony Website!");
};

// Example: Add year automatically in footer
document.addEventListener("DOMContentLoaded", () => {
  let footer = document.getElementById("footer-year");
  if (footer) {
    footer.textContent = new Date().getFullYear();
  }
});
