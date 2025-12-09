// donationproject/homesection/about.js
// Enable mobile menu toggle on the about page

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('navbar-hamburger');
  const navLinks = document.getElementById('navbar-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('open');
      hamburger.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
      });
    });
  }
});
