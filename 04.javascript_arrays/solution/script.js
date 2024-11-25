const itemsList = document.querySelector('#items');
const addButton = document.querySelector('#add');
const resetButton = document.querySelector('#reset');

addButton.addEventListener('click', () => {
  const newItemValue = prompt("Enter new item")
  const newItem = document.createElement('li');
  newItem.textContent = newItemValue
  itemsList.appendChild(newItem);
});

resetButton.addEventListener('click', () => {
  itemsList.innerHTML = '';
});