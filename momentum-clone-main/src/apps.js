const appBox = document.querySelector('.app-box');
const apps = document.querySelector('.apps');
const text = document.querySelector('.app-box__text');
const icon = document.querySelector('.app-box__icon');

let isOpen = true;

appBox.addEventListener('click', () => {
  isOpen && apps.classList.add('hidden');
  !isOpen && apps.classList.remove('hidden');

  if (isOpen) {
    isOpen = false;
    apps.classList.add('hidden');
    text.innerText = 'OPEN APPS';
    icon.classList.add('fa-caret-right');
    icon.classList.remove('fa-caret-left');
  } else {
    isOpen = true;
    apps.classList.remove('hidden');
    text.innerText = 'CLOSE APPS';
    icon.classList.add('fa-caret-left');
    icon.classList.remove('fa-caret-right');
  }
});
