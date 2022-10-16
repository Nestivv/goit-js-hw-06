const input = document.querySelector('#validation-input');
const inputLength = Number(input.getAttribute('data-length'));
// console.log(inputLength);

let currentInputLength = 0;
function onInputLength(event) {
  currentInputLength = Number(event.currentTarget.value.length);
  //   console.log(currentInputLength);
}
input.addEventListener('input', onInputLength);

function onInputBlur(event) {
  if (inputLength === currentInputLength) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else input.classList.add('invalid');
}
input.addEventListener('blur', onInputBlur);
