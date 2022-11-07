function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const valueToInput = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const divsContainer = document.querySelector('#boxes');

const onCreateCounterInValueInput = value => {
  valueToInput.setAttribute('counter', value.currentTarget.value);
  console.log(value.currentTarget.value)
};

const onCreateBoxes = () => {
  let startBoxSizing = 30;
  let allDivsEl = [];
  
  for (let i = 1; i <= valueToInput.getAttribute('counter'); i += 1) {
    startBoxSizing += 10;
    const createdDiv = document.createElement('div');

    createdDiv.classList.add('box-item');
    createdDiv.style.width = `${startBoxSizing}px`;
    createdDiv.style.height = `${startBoxSizing}px`;
    createdDiv.style.border = '2px solid black';
    createdDiv.style.backgroundColor = `${getRandomHexColor()}`;
    createdDiv.style.marginTop = '10px';
    createdDiv.style.verticalAlign = 'middle';

    allDivsEl.push(createdDiv);
  }
  divsContainer.append(...allDivsEl);
};

const onDestroyBtn = () => {
  divsContainer.innerHTML = '';
  valueToInput.removeAttribute('counter');
  valueToInput.value = '';
};

valueToInput.addEventListener('input', onCreateCounterInValueInput);
createBtn.addEventListener('click', onCreateBoxes);
destroyBtn.addEventListener('click', onDestroyBtn);