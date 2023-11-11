// Імпорт функцій
import { fetchBookById } from './api';

// Забираю з HTML елемент модальне вікно та елемент кнопка
const el = {
  modalWindow: document.querySelector('.modal-window'),
  buttonAddToList: document.querySelector('.add-to-list'),
};

function createBookCard(bookId) {
  // Початок відображення спінеру
  fetchBookById(bookId)
    .then(({ book_image, title, author, description, buy_links }) => {
      const amazon_link = buy_links[0].url;
      const appleBooks_link = buy_links[1].url;
      console.log(book_image);
      console.log(title);
      console.log(author);
      console.log(description);
      console.log(amazon_link);
      console.log(appleBooks_link);
      el.modalWindow.innerHTML = createMarkup(
        book_image,
        title,
        author,
        description,
        amazon_link,
        appleBooks_link
      );
    })
    .catch(error => {
      Notify.failure(`Error: ${error}`);
    })
    .finally(() => {
      // Відключення спінеру
    });
}

function createMarkup(
  bookCover,
  title,
  author,
  descr,
  amazonLink,
  appleBooksLink
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
    <button class="add-to-list"></button>
    `;
}

createBookCard('643282b2e85766588626a144');
