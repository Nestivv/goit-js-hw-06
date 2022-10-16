function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btn = document.querySelector('.change-color');
const span = document.querySelector('.color');
const body = document.querySelector('body');

function onClickBtn() {
  const color = getRandomHexColor();
  span.textContent = color;
  body.setAttribute('style', `background-color: ${color}`);
}
btn.addEventListener('click', onClickBtn);
