const counter = document.querySelector('#value');

let counterValue = 0;

const decrementCount = () => {
  counterValue = Number(counter.textContent) - 1;
  return (counter.textContent = String(counterValue));
};

const incrementCount = () => {
  counterValue = Number(counter.textContent) + 1;
  return (counter.textContent = String(counterValue));
};

const minusCount = document.querySelector('[data-action="decrement"]');
const plusCount = document.querySelector('[data-action="increment"]');
minusCount.addEventListener('click', decrementCount);
plusCount.addEventListener('click', incrementCount);
