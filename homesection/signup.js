// signup.js - Form validation for signup page

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.signup-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    const name = form.querySelector('input[placeholder="Full Name"]');
    const email = form.querySelector('input[type="email"]');
    const phone = form.querySelector('input[type="tel"]');
    const blood = form.querySelector('input[placeholder^="Blood Group"]');
    const location = form.querySelector('input[placeholder="Location/City"]');
    let valid = true;
    let message = '';

    if (!name.value.trim()) {
      valid = false;
      message += 'Full Name is required.\n';
    }
    if (
      !email.value.trim() ||
      !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value)
    ) {
      valid = false;
      message += 'A valid Email Address is required.\n';
    }
    if (
      !phone.value.trim() ||
      !/^\+?\d{7,15}$/.test(phone.value.replace(/\s/g, ''))
    ) {
      valid = false;
      message += 'A valid Phone Number is required.\n';
    }
    if (!blood.value.trim() || !/^(A|B|AB|O)[+-]$/i.test(blood.value.trim())) {
      valid = false;
      message += 'A valid Blood Group (e.g. O+, A-) is required.\n';
    }
    if (!location.value.trim()) {
      valid = false;
      message += 'Location/City is required.';
    }
    if (!valid) {
      e.preventDefault();
      alert(message);
    }
  });
});
