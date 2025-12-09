const formEl = document.querySelector('.login-form');
const emailEl = document.getElementById('email');
const passwordEl = document.getElementById('password');
const messageContainer = document.getElementById('message-container');

// function to display messages
function showMessage(message, isSuccess) {
    messageContainer.textContent = message;
    messageContainer.style.display = 'block';
    messageContainer.style.backgroundColor = isSuccess ? '#fff' : '#ffff';
    messageContainer.style.color = isSuccess ? '#0fe741ff' : '#f10820ff';
    // messageContainer.style.border = isSuccess ? '1px solid #c3e6cb' : '1px solid #f5c6cb';
}

// handling form submission
formEl.addEventListener('submit', async (e)=>{
    e.preventDefault();
    // getting inputs from the form
    const formData = {
        email: emailEl.value,
        password: passwordEl.value
    };
    // sending data to the server
    try{
        const response = await fetch('http://localhost:3000/api/auth/login',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        })
        const result = response.json();
        setTimeout(()=>{
            messageContainer.style.display = 'none';
        }, 2000); // hide message after 2 seconds

        if(response.ok){
            showMessage('Login successful. Redirecting...', true);
            // redirecting to dashboard after 2 seconds
            setTimeout(()=>{
                window.location.href = '../../../donorsportal/portal.html';
            }, 2000);
        } else {
            showMessage(result.message || 'Login failed. Please try again.', false);
        }
    } catch(error){
        console.error('Error during login:', error);
        showMessage('An error occurred during login. Please try again.', false);
    }
})