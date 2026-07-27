const authForm = document.getElementById('authForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const rememberMeCheckbox = document.getElementById('rememberMe');
const feedback = document.getElementById('feedback');
const actionBtn = document.getElementById('actionBtn');
const authPrompt = document.getElementById('authPrompt');
const toggleAuth = document.getElementById('toggleAuth');
const emailList = document.getElementById('email-list');
let isSignupMode = false;

function getStoredAccounts() {
    return JSON.parse(localStorage.getItem('loginAccounts') || '{}');
}

function saveStoredAccounts(accounts) {
    localStorage.setItem('loginAccounts', JSON.stringify(accounts));
}

function setFeedback(message, isSuccess = false) {
    feedback.textContent = message;
    feedback.classList.toggle('success', isSuccess);
}

function updateEmailSuggestions() {
    const accounts = getStoredAccounts();
    emailList.innerHTML = '';

    Object.keys(accounts).forEach(email => {
        const option = document.createElement('option');
        option.value = email;
        emailList.appendChild(option);
    });
}

function setMode(signup) {
    isSignupMode = signup;
    actionBtn.textContent = signup ? 'Sign up' : 'Login';
    authPrompt.textContent = signup ? 'Already have an account?' : 'Don’t have an account?';
    toggleAuth.textContent = signup ? 'Log in' : 'Sign up';
    setFeedback('');
}

function validatePassword(password) {
    return password.length >= 8;
}

authForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = emailInput.value.trim().toLowerCase();
    const password = passwordInput.value;
    const accounts = getStoredAccounts();

    if (!email || !password) {
        setFeedback('Please enter both email and password.');
        return;
    }

    if (isSignupMode) {
        if (accounts[email]) {
            setFeedback('This email is already registered. Please log in.');
            return;
        }
        if (!validatePassword(password)) {
            setFeedback('Password must be at least 8 characters.');
            return;
        }

        accounts[email] = password;
        saveStoredAccounts(accounts);
        setFeedback('Account created successfully! You can now log in.', true);
        setMode(false);
        updateEmailSuggestions();
        passwordInput.value = '';
        return;
    }

    if (!accounts[email]) {
        setFeedback('No account found for this email. Please sign up first.');
        return;
    }

    if (accounts[email] !== password) {
        setFeedback('Incorrect password. Please try again.');
        return;
    }

    setFeedback('Login successful! Redirecting...', true);
    if (rememberMeCheckbox.checked) {
        localStorage.setItem('rememberedEmail', email);
    } else {
        localStorage.removeItem('rememberedEmail');
    }

    setTimeout(() => {
        window.location.href = 'home.html';
    }, 800);
});

toggleAuth.addEventListener('click', function (event) {
    event.preventDefault();
    setMode(!isSignupMode);
});

emailInput.addEventListener('focus', updateEmailSuggestions);

document.addEventListener('DOMContentLoaded', function () {
    updateEmailSuggestions();
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
        emailInput.value = rememberedEmail;
        rememberMeCheckbox.checked = true;
    }
    setMode(false);
});

