const todoLists = document.querySelector('.todo__lists');
const morningItems = document.querySelector('.items.morning');
const afternoonItems = document.querySelector('.items.afternoon');
const eveningItems = document.querySelector('.items.evening');
const time = document.querySelector('.select-time');
const form = document.querySelector('.todo__form');
const input = document.querySelector('.todo__input');
const addBtn = document.querySelector('.todo__button');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  addItem(time.value);
});

function addItem(time) {
  const text = input.value;
  if (!text) {
    input.focus();
    return;
  }
  const item = createItem(text);
  switch (time) {
    case 'morning':
      morningItems.append(item);
      break;
    case 'afternoon':
      afternoonItems.append(item);
      break;
    case 'evening':
      eveningItems.append(item);
      break;
  }

  item.scrollIntoView({ block: 'center' });

  input.value = '';
  input.focus();
}

let id = 0;
function createItem(text) {
  const item = document.createElement('li');
  item.setAttribute('class', 'item__row');
  item.setAttribute('data-id', id);
  item.innerHTML = `
  <div class="item">
    <div class="item__info">
    <button class="item__check">
      <i class="fas fa-check check-icon" data-id=${id}></i>
    </button>
    <span class="item__name">${text}</span>
    </div> 
    <button class="item__delete">
      <i class="fas fa-trash-alt delete-icon" data-id=${id}></i>
    </button>
  </div>
  <div class="item__divider"></div>`;
  id++;
  return item;
}

todoLists.addEventListener('click', (event) => {
  const id = event.target.dataset.id;
  if (!id) {
    return;
  }
  const itemRow = document.querySelector(`.item__row[data-id='${id}']`);
  if (event.target.classList.contains('check-icon')) {
    const itemCheck = itemRow.querySelector('.item__check');
    const itemName = itemRow.querySelector('.item__name');
    itemCheck.classList.toggle('checked');
    itemName.classList.toggle('checked');
  } else {
    itemRow.remove();
  }
});
