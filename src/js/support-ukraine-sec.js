import { supportItems } from './support.js';
import { createMarkup } from './markup.js';

const supportList = document.querySelector('.js-suport-list');
const arrowDown = document.querySelector('.support-arrow-down');
const arrowUp = document.querySelector('.support-arrow-up');

arrowDown.addEventListener('click', handlerDown);
arrowUp.addEventListener('click', handlerUp);

let i = 0;
supportItems.forEach(element => {
  element.id = i + 1;
  i += 1;
});

supportList.insertAdjacentHTML('afterbegin', createMarkup(supportItems));

function handlerDown() {
  arrowDown.classList.toggle('visually-hidden');
  arrowUp.classList.toggle('visually-hidden');

  for (let i = 0; i < 3; i += 1) {
    supportList.children[i].classList.add('visually-hidden');
  }

  for (let i = 7; i < 9; i += 1) {
    supportList.children[i].classList.remove('visually-hidden');
  }
}

function handlerUp() {
  arrowDown.classList.toggle('visually-hidden');
  arrowUp.classList.toggle('visually-hidden');

  for (let i = 0; i < 3; i += 1) {
    supportList.children[i].classList.remove('visually-hidden');
  }

  for (let i = 7; i < 9; i += 1) {
    supportList.children[i].classList.toggle('visually-hidden');
  }
}
