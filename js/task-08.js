// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const controls = document.querySelector('#controls');

const renderBtn = document.querySelector('[data-action="render"]');

const destroyBtn = document.querySelector('[data-action="destroy"]');

const boxesContainer = document.querySelector('#boxes');

// console.log(renderBtn);
// console.log(destroyBtn);
// console.log(boxesContainer);
// console.log(controls.firstElementChild.value)

renderBtn.addEventListener('click', event => {
  const amount = controls.firstElementChild.value;
  createBoxes(amount);
});

function createBoxes(amount) {
  let size = 30;
  for (let i = 1; i <= amount; i += 1) {
    const newBox = document.createElement('div');
    boxesContainer.append(newBox);
    newBox.style.width = `${size}px`;
    newBox.style.height = `${size}px`;
    newBox.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`;
    size += 10;
  }

  function random() {
    return Math.floor(Math.random() * 256);
  }
}

destroyBtn.addEventListener('click', event => {
  boxesContainer.textContent = '';
  controls.firstElementChild.value = '';
});