const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('navlinks');

// Toggle menu on hamburger click
menuToggle.addEventListener('click', (e) => {
  navLinks.classList.toggle('active');
  e.stopPropagation(); // prevent the document click from closing it immediately
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target)) {
    navLinks.classList.remove('active');
  }
});

// Optional: stop clicks inside navLinks from closing it
navLinks.addEventListener('click', (e) => {
  e.stopPropagation();
});
