/**
 * @constant {HTMLInputElement} loginEmail - Reference to the email input field.
 */
let loginEmail = document.getElementById('login-email');

/**
 * @constant {HTMLInputElement} loginPassword - Reference to the password input field.
 */
let loginPassword = document.getElementById('login-password');

/**
 * @constant {NodeListOf<HTMLInputElement>} inputs - All input fields on the page.
 */
let inputs = document.querySelectorAll('input');

/**
 * @constant {HTMLElement} error - Element used to display error messages.
 */
let error = document.getElementById('error-message');

/**
 * Checks all input fields and applies error styles to empty ones.
 * @function login
 * @returns {void}
 */
function login() {
    inputs.forEach(input => {
        emptyCheck(input);
    });
}

/**
 * Checks if a specific input field is empty.
 * If empty, applies an error border color and shows an error message.
 * @function emptyCheck
 * @param {HTMLInputElement} input - The input field to validate.
 * @returns {void}
 */
function emptyCheck(input) {
    if (!input.value.trim()) {
        input.parentElement.style.borderColor = "var(--error-color)";
        error.textContent = "Check your email and password. Please try again";
    }
}

/**
 * Listens for user input and resets the border color and error message
 * when the user starts typing in any input field.
 * @event input
 * @param {InputEvent} event - The input event triggered when typing occurs.
 */
document.addEventListener('input', function(event) {
    let input = event.target;
    input.parentElement.style.borderColor = "";
    error.textContent = "";
});