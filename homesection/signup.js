// signup.js - Form validation for signup page

const formEl = document.getElementById('account-form');
const usernameEl = document.getElementById('username');
const emailEl = document.getElementById('email');
const phoneEl = document.getElementById('phone');
const bloodEl = document.getElementById('blood');
const passwordEl = document.getElementById('password');
const confirmPasswordEl = document.getElementById('confirm-password');


formEl.addEventListener('submit', (e) => {
  e.preventDefault()
  validateInputs();
  // console.log(e);
  
});

function validateInputs() {
    //  USERNAME
  if (usernameEl.value.trim().length === 0) {
    setError(usernameEl, 'Username Can not be empty');

  } else if (usernameEl.value.trim().length < 3 || usernameEl.value.trim().length > 20) {
    setError(usernameEl, 'Username min 3 and max 20 characters');
  } else {
    setSuccess(usernameEl);
  }

  // EMAIL
  if (emailEl.value.trim().length === 0) {
    setError(emailEl, 'Email can Not be empty');

  } else if (validateEmail(emailEl.value)) {
    setSuccess(emailEl);
  } else {
    setError(emailEl, 'email invalid');
  }
  // PHONE
  if (phoneEl.value.trim().length === 0) {
    setError(phoneEl, 'Phone number required');
  } else if (phoneEl.value.trim().length < 10 || phoneEl.value.trim().length > 15) {
    setError(phoneEl, 'Phone number must not be less than 10 and more than 15')

  } else if (validatePhone(phoneEl.value)) {
    setSuccess(phoneEl);
  }else {
    setError(phoneEl, 'phone Invalid');
    }
  // BLOOD
  // if (!bloodEl.value.trim() || !/^(A|B|AB|O)[+-]$/.test(bloodEl.value.trim())) {
  //     setError (bloodEl,'A valid Blood Group (e.g. O+, A-) is required.');
  // } else {
  //   setSuccess(bloodEl);
  //   }
  // PASSWORD
  if (passwordEl.value.trim().length === 0) {
    setError(passwordEl, 'input your password');
  } else if (passwordEl.value.trim().length < 4 || passwordEl.value.trim().length > 20) {
    setError(passwordEl, 'password should range between 4 - 20 characters')
  } else {
    setSuccess(passwordEl);
  }
  // CONFIRM PASSWORD
  if (confirmPasswordEl.value.trim().length === 0) {
    setError(confirmPasswordEl, 'confirm password');
  }
 else if (confirmPasswordEl.value.trim() !== passwordEl.value.trim()) {
    setError(confirmPasswordEl, 'password do not match')
  } else {
    setSuccess(confirmPasswordEl);
  }

  setTimeout((validateInputs), 1000);
}

function setError(element, message) {
  const parent = element.parentElement;
  parent.classList.add('error');
  const paragraph = parent.querySelector('p')
  paragraph.textContent = message;
}

const setSuccess = (element, message) => {
  const parent = element.parentElement;
  parent.classList.remove('error')
  parent.classList.add('success');
}

const validateEmail = (email) => {
      const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}(\.[0-9]{1,3}){3}\])|(([a-zA-Z\-0-9]+\.)+[A-Za-z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}

const validatePhone = (phone) => {
  const phoneRegex = /^\+?\d{1,4}?[-.\s]?(\(?\d{1,4}?\)?[-.\s]?)*\d{1,4}[-.\s]?\d{1,9}$/
return phoneRegex.test(phone);
}
