// Імпорт функцій
import { fetchBookById } from './api';

import * as basicLightbox from 'basiclightbox';
import '../../node_modules/basiclightbox/dist/basicLightbox.min.css';
import icons from '/images/book-popup/icons.svg';
import notDownloaded1x from '/images/book-popup/not-downloaded@1x.jpg';
import notDownloaded2x from '/images/book-popup/not-downloaded@2x.jpg';
import amazon from '/images/book-popup/amazon@1x.webp';
import amazon2x from '/images/book-popup/amazon@2x.webp';
import appleBooks from '/images/book-popup/apple@1x.webp';
import appleBooks2x from '/images/book-popup/apple@2x.webp';
import Swal from 'sweetalert2';

import { getNameForUpdateHeaderUser } from './header';

import { el } from './refs';

const STORAGE_KEY = 'booksList';

function createBookCard(evt) {
  // Початок відображення спінеру

  if (evt.target === evt.currentTarget) {
    return;
  }
  const currentBook = evt.target.closest('.js-book-on-click');

  const bookId = currentBook.dataset.id;

  fetchBookById(bookId)
    .then(book => {
      const { book_image, title, author, description, buy_links } = book;
      const amazon_link = buy_links[0].url;
      const appleBooks_link = buy_links[1].url;
      const localStorage = getFromLocalStorage();

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

      const instance = basicLightbox.create(
        `
    <div class="popup-modal">${markup}</div>    
`,
        {
          onShow: instance => {
            document.body.style.overflow = 'hidden';
          },
          onClose: instance => {
            document.body.style.overflow = 'visible';
          },
        }
      );

      instance.show();

      // вішаємо на картинку обробник, чи вона завантажилась

      el.bookPopupImage = document.querySelector('.popup-img');
      el.bookPopupImage.onerror = function () {
        el.bookPopupImage.src = notDownloaded1x;
        el.bookPopupImage.srcset = `${notDownloaded1x} 1x, ${notDownloaded2x} 2x`;
      };

      el.buttonAddToList = document.querySelector('.popup-button');
      el.buttonAddToList.addEventListener(
        'click',
        onButtonBookPopupClick.bind(book)
      );

      document.addEventListener('keydown', handlerPress.bind(instance));

      el.closeModalButton = document.querySelector('.popup-close-button');
      el.closeModalButton.addEventListener(
        'click',
        handlerClose.bind(instance)
      );

      // Функція схову кнопку для неавторизованих користувачів
      getNameForUpdateHeaderUser().then(login => {
        const addToListButtonBox = document.querySelector(
          '.popup-shopping-list'
        );
        if (login) {
          addToListButtonBox.classList.remove('visually-hidden');
          el.buttonAddToList.classList.remove('visually-hidden');
        } else {
          addToListButtonBox.classList.add('visually-hidden');
          el.buttonAddToList.classList.add('visually-hidden');
        }
      });

      el.textUnderRemoveButton = document.querySelector('.popup-under-button');
      if (el.buttonAddToList.textContent === 'Add to shopping list') {
        el.textUnderRemoveButton.classList.add('is-hidden');
      } else {
        el.textUnderRemoveButton.classList.remove('is-hidden');
      }
    })
    .catch(error => {
      Swal.fire({
        title: 'Something went wrong!',
        text: 'Try reload the page.',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
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
    Swal.fire({
      title: 'Something went wrong!',
      text: 'Try reload the page.',
      icon: 'error',
      confirmButtonText: 'Ok',
    });
  }
}

function addToLocalStorage(arr) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
}

// Створення розмітки
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
        <img class="popup-img" src="${bookCover}" alt="${title}" width="62" height="19" width="287" />
      </div>
      <div class="popup-about">
        <h2 class="popup-title">${title}</h2>
        <p class="popup-author">${author}</p>
        <p class="popup-descr">${descr}</p>
        <ul class="popup-store-list">
          <li class="popup-store popup-store-amazon">
            <a href="${amazonLink}"
            target="_blank"
              rel="noopener noreferrer">
            <img class="popup-store-icon popup-store-icon-amazon" src="${amazon}" alt="Amazon" srcset="${amazon} 1x, ${amazon2x} 2x" width="62" height="19" />
            </a>
          </li>
          <li class="popup-store popup-store-apple">
            <a href="${appleBooksLink}"
            target="_blank"
              rel="noopener noreferrer">
            <img class="popup-store-icon popup-store-icon-apple" src="${appleBooks}" alt="AppleBook" srcset="${appleBooks} 1x, ${appleBooks2x} 2x" width="33" height="32" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="popup-shopping-list">
      <button class="popup-button">${buttonText}</button>
      <p class="popup-under-button">
         Сongratulations! You have added the book to the shopping list. To delete,
        press the button “Remove from the shopping list”.
     </p>
    </div>
    <button class="popup-close-button" type="button" data-modal-close>
      <svg class="popup-icon" width="8" height="8">
        <use href="${icons}#close-btn"></use>
      </svg>
    </button>
    `;
}

function onButtonBookPopupClick() {
  const book = this;
  if (el.buttonAddToList.textContent === 'Add to shopping list') {
    setToLocalStorage(book);
    el.buttonAddToList.textContent = 'Remove from the shopping list';
    el.textUnderRemoveButton.classList.remove('is-hidden');
  } else {
    removeFromLocalStorage(book);
    el.buttonAddToList.textContent = 'Add to shopping list';
    el.textUnderRemoveButton.classList.add('is-hidden');
  }
}

function removeFromLocalStorage({ _id: bookId }) {
  const books = getFromLocalStorage();
  const newBooks = books.filter(book => String(book._id) !== bookId);
  addToLocalStorage(newBooks);
}

//Закриття модального вікна
function handlerPress(event) {
  if (event.key !== 'Escape') {
    return;
  }
  this.close();
  document.removeEventListener('keydown', handlerPress);
}

function handlerClose() {
  this.close();
  el.closeModalButton.removeEventListener('click', handlerPress);
}

export { createBookCard };
