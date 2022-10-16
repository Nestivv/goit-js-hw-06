// Напиши скрипт, который реагирует на изменение значения
// input#font - size - control(событие input) и изменяет инлайн -
//     стиль span#text обновляя свойство font - size.В результате при
//     перетаскивании ползунка будет меняться размер текста.
const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

function onRange(event) {
  const currentFontSize = event.currentTarget.value;
  //   console.log(currentFontSize);
  //   console.log(span);
  span.setAttribute('style', `font-size: ${currentFontSize}px`);
}
input.addEventListener('input', onRange);
