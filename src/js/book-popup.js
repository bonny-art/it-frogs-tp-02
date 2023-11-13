// Імпорт функцій
import { fetchBookById } from './api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import * as basicLightbox from 'basiclightbox';
import '../../node_modules/basiclightbox/dist/basicLightbox.min.css';

import { el } from './refs';

console.log('el', el);

const STORAGE_KEY = 'booksList';

function createBookCard(evt) {
  // Початок відображення спінеру

  if (evt.target === evt.currentTarget) {
    return;
  }
  const currentBook = evt.target.closest('.js-book-on-click');
  console.log(currentBook);
  const bookId = currentBook.dataset.id;

  console.log('bookId', bookId);

  fetchBookById(bookId)
    .then(book => {
      const { book_image, title, author, description, buy_links } = book;
      const amazon_link = buy_links[0].url;
      const appleBooks_link = buy_links[1].url;
      const localStorage = getFromLocalStorage();
      console.log('localStorage ', localStorage);
      let buttonText;
      if (
        localStorage.length === 0 ||
        !localStorage.find(book => book._id === bookId)
      ) {
        buttonText = 'Add to shopping list';
      } else {
        buttonText = 'Remove from the shopping list';
      }

      const markup = createMarkup(
        book_image,
        title,
        author,
        description,
        amazon_link,
        appleBooks_link,
        buttonText
      );

      const instance = basicLightbox.create(`
    <div class="popup-modal">${markup}</div>    
`);
      instance.show();

      el.buttonAddToList = document.querySelector('.popup-button');
      el.buttonAddToList.addEventListener(
        'click',
        onButtonBookPopupClick.bind(book)
      );
      document.addEventListener('keydown', handlerPress.bind(instance));
    })
    .catch(error => {
      alert(`Error: ${error}`);
    })
    .finally(() => {
      // Відключення спінеру
    });
}

function setToLocalStorage(str) {
  const localArr = getFromLocalStorage();
  localArr.push(str);
  addToLocalStorage(localArr);
}

function getFromLocalStorage() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log(error.message);
  }
}

function addToLocalStorage(arr) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
}

function createMarkup(
  bookCover,
  title,
  author,
  descr,
  amazonLink,
  appleBooksLink,
  buttonText
) {
  return `
    <div class="popup-info">
      <div class="popup-cover">
        <img class="popup-img" src="${bookCover}" alt="${title}" />
      </div>
      <div class="popup-about">
        <h2 class="popup-title">${title}</h2>
        <p class="popup-author">${author}</p>
        <p class="popup-descr">${descr}</p>
        <ul class="popup-store-list">
          <li class="popup-store popup-store-amazon">
            <a href="${amazonLink}">
            <img src="../images/book-popup/amazon.svg" alt="" />
            </a>
          </li>
          <li class="popup-store popup-store-apple">
            <a href="${appleBooksLink}">
            <img src="../images/book-popup/appleBooks.svg" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <button class="popup-button">${buttonText}</button>
    `;
}

const aaa = document.querySelector('.aaa');
console.log(aaa);
aaa.addEventListener('click', createBookCard);

function onButtonBookPopupClick() {
  const book = this;
  console.log(book);
  if (el.buttonAddToList.textContent === 'Add to shopping list') {
    setToLocalStorage(book);
    el.buttonAddToList.textContent = 'Remove from the shopping list';
  } else {
    removeFromLocalStorage(book);
    el.buttonAddToList.textContent = 'Add to shopping list';
  }
}

function removeFromLocalStorage({ _id: bookId }) {
  console.log('in remove', bookId);
  const books = getFromLocalStorage();
  const newBooks = books.filter(book => String(book._id) !== bookId);
  addToLocalStorage(newBooks);
}

function handlerPress(event) {
  if (event.key !== 'Escape') {
    return;
  }
  this.close();
  document.removeEventListener('keydown', handlerPress);
}

export { createBookCard };
