const refs = {
  renderBtn: document.querySelector('[data-action="render"]'),
  destroyBtn: document.querySelector('[data-action="destroy"]'),

  boxesId: document.getElementById('boxes'),
  inputEl: document.querySelector('#controls input'),
  basicSize: 30,
};

refs.renderBtn.addEventListener('click', getAmount);
refs.destroyBtn.addEventListener('click', removeBoxes);

function getAmount() {
  const amount = refs.inputEl.value;
  createBoxes(amount);
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const createDiv = document.createElement('div');

    const randomColor = () => Math.floor(Math.random() * 256);

    createDiv.style.width = `${refs.basicSize}px`;
    createDiv.style.height = `${refs.basicSize}px`;
    createDiv.style.backgroundColor = `rgb( ${randomColor()} , ${randomColor()} , ${randomColor()} )`;

    refs.boxesId.append(createDiv);
    refs.basicSize += 10;
  }
}

function removeBoxes() {
  refs.boxesId.innerHTML = '';
  refs.inputEl.value = '';
  refs.basicSize = 30;
}