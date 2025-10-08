let loginEmail = document.getElementById('login-email');
let loginPassword = document.getElementById('login-password');
let inputs = document.querySelectorAll('input');
let error = document.querySelector('.error-message');
let form = document.querySelector('.form-box');
let loginForm = document.querySelector('.login-box');
let signupForm = document.querySelector('.signup-box');
let signUpbox = document.querySelector('.signup-button-box');
let backArrow = document.getElementsByClassName('back-arrow');

function login() {
    inputs.forEach(input => {
        emptyCheck(input);
    });
}

function emptyCheck(input) {
    if (!input.value.trim()) {
        input.parentElement.style.borderColor = "var(--error-color)";
        error.textContent = "Check your email and password. Please try again";
    }
}

document.addEventListener('input', clearError);

function clearError(e) {
    let input = e.target;
    input.parentElement.style.borderColor = "";
    error.textContent = "";
}

function showSignupForm() {
    form.style.height = "630px";
    loginForm.classList.add('d-none');
    signUpbox.classList.add('d-none');
    signupForm.classList.remove('d-none');
    error.textContent = "";
    inputs.forEach(input => input.parentElement.style.borderColor = "");
}