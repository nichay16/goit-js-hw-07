// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const counter = document.querySelector('#counter');
// console.log(counter);

const decrementBtn = document.querySelector('button[data-action="decrement"]');
// console.log(decrementBtn);

const incrementBtn = document.querySelector('button[data-action="increment"]');
// console.log(incrementBtn);

const value = document.querySelector('#value');


let counterValue = 0;
// console.log(value.textContent);

function decrement () {
    counterValue -= 1;

    value.textContent = counterValue;

    console.log('Отнимает значение');
};

function increment () {
    counterValue += 1;

    value.textContent = counterValue;

    console.log('Добавляет значение');
};

decrementBtn.addEventListener('click', decrement);

incrementBtn.addEventListener('click', increment);