// Clock
const clock = document.querySelector('.clock');

function getClock() {
  const today = new Date();
  const hour = String(today.getHours()).padStart(2, '0');
  const minuate = String(today.getMinutes()).padStart(2, '0');
  const second = String(today.getSeconds()).padStart(2, '0');
  clock.innerText = `${hour}:${minuate}:${second}`;
}

getClock();
setInterval(getClock, 1000);

// Date
const todayDate = document.querySelector('.date');

function getTodayDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.toLocaleString('en-us', { month: 'long' });
  const date = today.getDate();
  todayDate.innerText = `${month} ${date}, ${year}`;
}

getTodayDate();
