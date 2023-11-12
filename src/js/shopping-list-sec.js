import { el } from './refs.js';
const paginationContainer = document.querySelector('.pagination');
const paginationNumbers = document.getElementById('pagination-numbers');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');
const toEnd = document.getElementById('to-end-button');
const toStart = document.getElementById('to-start-button');

localStorage.removeItem('books-list');

function getFromLocalStorage() {
  const tempBookList = JSON.parse(localStorage.getItem('booksList'));
  if (tempBookList) {
    return tempBookList;
  } else {
    return [];
  }
}

const tempBookList = getFromLocalStorage();

function getPaginationLimit() {
  if (window.innerWidth <= 767) {
    return 4;
  } else {
    return 3;
  }
}

function getItemsInBatch(startIndex, batchSize) {
  if (tempBookList) {
    return tempBookList.slice(startIndex, startIndex + batchSize);
  } else {
    return [];
  }
}

const paginationLimit = getPaginationLimit();
const pageCount = Math.ceil(tempBookList.length / paginationLimit);
let currentPage;

function appendPageNumber(index) {
  const pageNumber = document.createElement('button');
  pageNumber.className = 'pagination-number';
  pageNumber.innerHTML = index;
  pageNumber.setAttribute('page-index', index);
  pageNumber.setAttribute('aria-label', 'Page ' + index);
  paginationNumbers.appendChild(pageNumber);
}

function getPaginationNumbers() {
  for (let i = 1; i <= pageCount; i++) {
    appendPageNumber(i);
  }
}

function disableButton(button) {
  button.classList.add('disabled');
  button.setAttribute('disabled', true);
}

function enableButton(button) {
  button.classList.remove('disabled');
  button.removeAttribute('disabled');
}

function handlePageButtonsStatus() {
  if (currentPage === 1) {
    disableButton(prevButton);
    disableButton(toStart);
  } else {
    enableButton(prevButton);
    enableButton(toStart);
  }
  if (pageCount === currentPage) {
    disableButton(nextButton);
    disableButton(toEnd);
  } else {
    enableButton(nextButton);
    enableButton(toEnd);
  }
}

window.addEventListener('load', () => {
  getPaginationNumbers();
  setCurrentPage(1);

  prevButton.addEventListener('click', () => {
    setCurrentPage(currentPage - 1);
  });
  nextButton.addEventListener('click', () => {
    setCurrentPage(currentPage + 1);
  });
  toEnd.addEventListener('click', () => {
    setCurrentPage(pageCount);
  });
  toStart.addEventListener('click', () => {
    setCurrentPage(1);
  });

  document.querySelectorAll('.pagination-number').forEach(button => {
    const pageIndex = Number(button.getAttribute('page-index'));
    if (pageIndex) {
      button.addEventListener('click', () => {
        setCurrentPage(pageIndex);
      });
    }
  });
});

function setCurrentPage(pageNum) {
  currentPage = pageNum;

  handleActivePageNumber();
  handlePageButtonsStatus();

  const prevRange = (pageNum - 1) * paginationLimit;
  const currRange = pageNum * paginationLimit;

  const listBatch = getItemsInBatch(prevRange, currRange);

  if (listBatch.length > 0 || tempBookList.length > 0) {
    el.shoppingList.innerHTML = '';
    el.shoppingList.insertAdjacentHTML(
      'afterbegin',
      createBookTemplate(listBatch)
    );
    el.shoppingList.addEventListener('click', deleteFromCart);
    paginationContainer.classList.remove('hidden');
  } else {
    el.emptyPage.classList.remove('hidden');
    paginationContainer.classList.add('hidden');
  }
}

function handleActivePageNumber() {
  document.querySelectorAll('.pagination-number').forEach(button => {
    button.classList.remove('active');

    const pageIndex = Number(button.getAttribute('page-index'));
    if (pageIndex == currentPage) {
      button.classList.add('active');
    }
  });
}

function createBookTemplate(bookList) {
  const template = bookList.map(
    book => `
            <li class="shopping-book-card" data-book-id="${book._id}">
                <div class="image-thumb">
                <picture>
                  <source srcset="${book.book_image}" type="image/jpg">
                  <img class="shopping-book-cover" srcset="/images/shopping-list-sec/plug_x2.png 2x, /images/shopping-list-sec/plug_x1.png 1x" src="/images/shopping-list-sec/plug_x1.png" alt="plug">
                </picture>
                </div>
                <div class="card-info">
                    <h3 class="shopping-book-title">${book.title}</h3>
                    <p class="shopping-book-category">${book.list_name}</p>
                    <p class="shopping-book-description">${book.description}</p>
                    <p class="shopping-book-author">${book.author}</p>
                </div>
                <button type="button" class="delete-btn js-delete-book">
                    <svg class="delete-svg" width="16" height="16">
                        <use href="/images/shopping-list-sec/sprite.svg#trash"></use>
                    </svg>
                </button>
                <div class="trade-fairs">
                  <a href="${book.buy_links[0].url}" target="_blank">
                    <img class="amazon-img" src="/images/shopping-list-sec/amazon.svg" width="32" height="11"/>
                  </a>
                  <a href="${book.buy_links[1].url}" target="_blank">
                    <img class="apple-books-img" src="/images/shopping-list-sec/appleBooks.svg" width="16" height="16"/>
                  </a>
                </div>
            </li>
`
  );
  return template.join('');
}

function deleteFromCart(e) {
  if (!e.target.parentNode.classList.contains('js-delete-book')) {
    return;
  }

  const card = e.target.closest('.shopping-book-card');
  const bookId = card.dataset['bookId'];
  const bookIndex = tempBookList.findIndex(item => item._id === bookId);

  if (bookIndex != -1) {
    console.log(bookIndex);
    tempBookList.splice(bookIndex, 1);
    localStorage.setItem('booksList', JSON.stringify(tempBookList));

    card.remove();

    setCurrentPage(currentPage);
  }
}
