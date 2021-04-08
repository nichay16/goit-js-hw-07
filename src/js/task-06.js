// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputElem = document.querySelector('#validation-input');

console.log(inputElem);

const attribute = inputElem.getAttribute('data-length');

console.log(attribute);

// console.log(inputElem.dataset.length);
// console.log(inputElem.value.length);

function onInputBlur () {
    if (inputElem.value.length === 6) {
        inputElem.classList.add('valid');
        inputElem.classList.remove('invalid')
    }  else if (inputElem.value.length === 0) {
        inputElem.classList.remove('invalid');
        inputElem.classList.remove('valid');
    } else {
        inputElem.classList.remove('valid')
        inputElem.classList.add('invalid');
    }

}

inputElem.addEventListener('blur', onInputBlur);


// let inputVal = document.getElementById("validation-input");

// let totalLenght = inputVal.getAttribute("data-length");

// let intTotallenght = parseInt(totalLenght, 10);

// console.log(totalLenght)