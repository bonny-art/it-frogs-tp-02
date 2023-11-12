// Імпорт функцій
import { fetchBookById } from './api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const STORAGE_KEY = 'booksList';

function createBookCard(bookId) {
  // Початок відображення спінеру
  fetchBookById(bookId)
    .then(book => {
      const { book_image, title, author, description, buy_links } = book;
      // .then(({ book_image, title, author, description, buy_links }) => {
      const amazon_link = buy_links[0].url;
      const appleBooks_link = buy_links[1].url;
      // console.log(book_image);
      // console.log(title);
      // console.log(author);
      // console.log(description);
      // console.log(amazon_link);
      // console.log(appleBooks_link);
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
      el.bookPopup.innerHTML = createMarkup(
        book_image,
        title,
        author,
        description,
        amazon_link,
        appleBooks_link,
        buttonText
      );

      el.buttonAddToList = document.querySelector('.add-to-list');
      el.buttonAddToList.addEventListener(
        'click',
        onButtonBookPopupClick.bind(book)
      );
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
    <div class="book-image">
      <img class="img-book-cover" src="${bookCover}" alt="${title}" />
    </div>
    <div>
      <h2 class="book-title">${title}</h2>
      <p class="book-author">${author}</p>
      <p class="book-descr">${descr}</p>
    <ul>
      <li>
        <a href="${amazonLink}">
        <img src="../images/book-popup/amazon.svg" alt="" />
        </a>
      </li>
      <li>
        <a href="${appleBooksLink}">
        <img src="../images/book-popup/appleBooks.svg" alt="" />
        </a>
      </li>
    </ul>
    </div>
    <button class="add-to-list">${buttonText}</button>
    `;
}

// createBookCard('643282b2e85766588626a144');
createBookCard('643282b2e85766588626a144');
// createBookCard('643282b1e85766588626a0dc');

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

// function getDataFromAPI(id) {

function removeFromLocalStorage({ _id: bookId }) {
  console.log('in remove', bookId);
  const books = getFromLocalStorage();
  const newBooks = books.filter(book => String(book._id) !== bookId);
  addToLocalStorage(newBooks);
}
