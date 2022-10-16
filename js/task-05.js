const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

function onTextOutput(event) {
  const InputValue = event.currentTarget.value;
  if (InputValue != '') {
    span.textContent = InputValue;
  } else span.textContent = 'Anonymous';
}
input.addEventListener('input', onTextOutput);
