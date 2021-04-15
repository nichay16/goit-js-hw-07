// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const refs = {
  inputId: document.getElementById('font-size-control'),
  spanId: document.getElementById('text'),
};

refs.inputId.addEventListener('input', size => {
  refs.spanId.style.fontSize = `${size.currentTarget.value}px`;
});