const loginContainer = document.querySelector('.login');
const loginForm = document.querySelector('.login-form');
const loginText = document.querySelector('.login__text');
const loginInput = document.querySelector('.login__input');
const loginButton = document.querySelector('.login__button');
const greeting = document.querySelector('.welcome');
const logout = document.querySelector('.logout');

const USERNAME_KEY = 'username';

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginContainer.classList.remove('hidden');
  loginForm.addEventListener('submit', onUsernameSubmit);
} else {
  greeting.innerHTML = `Hope your day is going well, ${savedUsername}`;
  logout.addEventListener('click', onLogout);
}

function onUsernameSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginContainer.classList.add('hidden');
  greeting.innerHTML = `Hope your day is going well, ${username}`;
}

function onLogout() {
  localStorage.removeItem(USERNAME_KEY);
  window.location.reload();
}
