// donationproject/homesection/script.js
// Add smooth scrolling, responsive menu, form validation, gallery lightbox, animated counters, and FAQ toggle

document.addEventListener('DOMContentLoaded', function () {
  // Smooth scrolling for nav links
  document.querySelectorAll('.navbar-links a[href^="#"]').forEach((link) => {
    link.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Responsive mobile menu toggle
  const hamburger = document.getElementById('navbar-hamburger');
  const navLinks = document.getElementById('navbar-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('open');
      hamburger.classList.toggle('open');
    });
    // Optional: close menu when a link is clicked (for better UX)
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
      });
    });
  }

  // Form validation for contact form
  const contactForm = document.querySelector('.contact form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      const name = contactForm.querySelector('input[type="text"]');
      const email = contactForm.querySelector('input[type="email"]');
      const message = contactForm.querySelector('textarea');
      let valid = true;
      if (!name.value.trim()) valid = false; // the trim() method removes white spaces from both ends of a string.
      if (
        !email.value.trim() ||
        !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value)
      )
        valid = false; //.test() method execute a search for a match between a regular expression and a specified string. it returns true or false.
      if (!message.value.trim()) valid = false;
      if (!valid) {
        e.preventDefault();
        alert('Please fill in all fields with a valid email.');
      }
    });
  }

  // Animated counters for statistics
  const counters = document.querySelectorAll('.stats-list span');
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.textContent.replace(/\D/g, ''); ///\D matches any character that is not a digit. the g flag indicates  global search.
      let count = 0;
      const increment = Math.ceil(target / 100);
      const animate = () => {
        count += increment;
        if (count < target) {
          counter.textContent = count + '+';
          requestAnimationFrame(animate);
        } else {
          counter.textContent = target + '+';
        }
      };
      animate();
    };
    if (counter.offsetParent !== null) updateCount();
  });

  // FAQ toggle (optional, for custom animation)
  document.querySelectorAll('.faq details').forEach((detail) => {
    detail.addEventListener('toggle', function () {
      // Custom animation or logic can go here
    });
  });

  // Gallery lightbox (basic)
  const galleryImages = document.querySelectorAll('.gallery-images img');
  galleryImages.forEach((img) => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', function () {
      const overlay = document.createElement('div');
      overlay.style.position = 'fixed';
      overlay.style.top = 0;
      overlay.style.left = 0;
      overlay.style.width = '100vw';
      overlay.style.height = '100vh';
      overlay.style.background = 'rgba(0,0,0,0.8)';
      overlay.style.display = 'flex';
      overlay.style.alignItems = 'center';
      overlay.style.justifyContent = 'center';
      overlay.style.zIndex = 9999;
      const fullImg = document.createElement('img');
      fullImg.src = img.src;
      fullImg.style.maxWidth = '90vw';
      fullImg.style.maxHeight = '80vh';
      fullImg.style.borderRadius = '12px';
      overlay.appendChild(fullImg);
      overlay.addEventListener('click', function () {
        document.body.removeChild(overlay);
      });
      document.body.appendChild(overlay);
    });
  });
});
