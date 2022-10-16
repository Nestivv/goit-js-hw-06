function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const newDivs = document.querySelector('#boxes');
console.log(input, createBtn, destroyBtn);

let currentInput = 0;
function onCurrentInput(event) {
  currentInput = Number(event.currentTarget.value);
  // console.log(currentInput);
}
input.addEventListener('input', onCurrentInput);
// console.log(currentInput);

function onCreateBoxes(amount) {
  amount = currentInput;
  let divWidth = 30;
  let divHeight = 30;
  for (let i = 1; i <= amount; i += 1) {
    const div = `<div style = 'width: ${divWidth}px; height: ${divHeight}px; background-color: ${getRandomHexColor()}'>${i}</div>`;
    newDivs.innerHTML += div;
    divWidth += 10;
    divHeight += 10;
  }
}

createBtn.addEventListener('click', onCreateBoxes);

function onDestroyBoxes() {
  newDivs.innerHTML = '';
}
destroyBtn.addEventListener('click', onDestroyBoxes);
