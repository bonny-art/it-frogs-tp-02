import { el } from './refs';
localStorage.removeItem('books-list');

const tempBookList = getFromLocalStorage();
let perPageLimit = getPerPageLimit();
let visibleButtons;
let pageAmount = Math.ceil(tempBookList.length / perPageLimit);

let currentPage;

window.addEventListener('load', () => {
  if (document.getElementById('shopping') === null) {
    return;
  }

  setCurrentPage(1);

  el.prevButton.addEventListener('click', () => {
    setCurrentPage(currentPage - 1);
  });
  el.nextButton.addEventListener('click', () => {
    setCurrentPage(currentPage + 1);
  });
  el.toEnd.addEventListener('click', () => {
    setCurrentPage(pageAmount);
  });
  el.toStart.addEventListener('click', () => {
    setCurrentPage(1);
  });

  document
    .getElementById('pagination-numbers')
    .addEventListener('click', switchPage);
});

function switchPage(e) {
  const button = e.target;
  if (button.classList.contains('pagination-page-number')) {
    const pageIndex = Number(button.getAttribute('page-index'));
    setCurrentPage(pageIndex);
  }
}

function getFromLocalStorage() {
  const tempBookList = JSON.parse(localStorage.getItem('booksList'));
  if (tempBookList) {
    return tempBookList;
  } else {
    return [];
  }
}

// window.addEventListener('resize', getPerPageLimit);
function getPerPageLimit() {
  if (window.innerWidth <= 767) {
    return 4;
  } else {
    return 3;
  }
}

// function handlePerPageLimit() {
//   const result = getPerPageLimit();
//   return result;
// }

// window.addEventListener('resize', getVisibleButtons);
function getVisibleButtons() {
  if (window.innerWidth <= 767) {
    return 2;
  } else {
    return 3;
  }
}

// function handleVisibleButtons() {
//   const result = getVisibleButtons();
//   return result;
// }

function getItemsInBatch(startIndex, batchSize) {
  if (tempBookList) {
    return tempBookList.slice(startIndex, batchSize);
  } else {
    return [];
  }
}

function appendPageNumber(index) {
  const pageNumber = document.createElement('button');
  pageNumber.classList.add('pagination-page-number');
  pageNumber.classList.add('pagination-number');
  pageNumber.innerHTML = index;
  pageNumber.setAttribute('page-index', index);
  pageNumber.setAttribute('aria-label', 'Page ' + index);

  el.paginationNumbers.appendChild(pageNumber);
}

function getPaginationNumbers(startNum, endNum) {
  for (let i = startNum; i <= endNum; i++) {
    appendPageNumber(i);
  }
}

function handlePageButtonsStatus() {
  if (currentPage === 1) {
    disableButton(el.prevButton);
    disableButton(el.toStart);
  } else {
    enableButton(el.prevButton);
    enableButton(el.toStart);
  }
  if (pageAmount === currentPage) {
    disableButton(el.nextButton);
    disableButton(el.toEnd);
  } else {
    enableButton(el.nextButton);
    enableButton(el.toEnd);
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

window.addEventListener('resize', () => {
  perPageLimit = getPerPageLimit();
  visibleButtons = getVisibleButtons();
  setCurrentPage(currentPage);
});

function setCurrentPage(pageNum) {
  currentPage = pageNum;

  handleActivePageNumber();
  handlePageButtonsStatus();

  const startIndex = (pageNum - 1) * perPageLimit;
  const currRange = pageNum * perPageLimit;

  const listBatch = getItemsInBatch(startIndex, currRange);

  if (listBatch.length != 0) {
    el.shoppingList.innerHTML = '';
    el.shoppingList.insertAdjacentHTML(
      'afterbegin',
      createBookTemplate(listBatch)
    );
    el.shoppingList.addEventListener('click', deleteFromCart);
  }
  if (pageAmount === 1) {
    el.paginationContainer.style.display = 'none';
  }
  if (tempBookList.length === 0) {
    el.paginationContainer.classList.add('hidden');
    el.emptyPage.classList.remove('hidden');
  } else {
    el.paginationContainer.classList.remove('hidden');
  }
  renderPagination();
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

function renderPagination() {
  // const maxVisibleButtons = handleVisibleButtons();
  const maxVisibleButtons = getVisibleButtons();
  el.paginationNumbers.innerHTML = '';
  pageAmount = Math.ceil(tempBookList.length / perPageLimit);

  if (currentPage > pageAmount) {
    setCurrentPage(pageAmount);
  }

  if (pageAmount <= maxVisibleButtons) {
    getPaginationNumbers(1, pageAmount);
  } else {
    const startPage = Math.max(
      currentPage - Math.floor(maxVisibleButtons / 2),
      1
    );
    const endPage = Math.min(startPage + maxVisibleButtons - 1, pageAmount);

    if (startPage > 1) {
      const ellipsisButton = document.createElement('button');

      ellipsisButton.className = 'pagination-number';
      ellipsisButton.textContent = '...';

      ellipsisButton.addEventListener('click', () => {
        setCurrentPage(startPage - 1);
      });

      el.paginationNumbers.appendChild(ellipsisButton);
    }

    getPaginationNumbers(startPage, endPage);

    if (endPage < pageAmount) {
      const ellipsisButton = document.createElement('button');

      ellipsisButton.className = 'pagination-number';
      ellipsisButton.textContent = '...';

      ellipsisButton.addEventListener('click', () => {
        setCurrentPage(currentPage + 1);
      });

      el.paginationNumbers.appendChild(ellipsisButton);
    }
  }
  handleActivePageNumber();
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
  const button = e.target.closest('.js-delete-book');

  if (!button) {
    return;
  }

  const card = button.closest('.shopping-book-card');
  const bookId = card.dataset['bookId'];
  const bookIndex = tempBookList.findIndex(item => item._id === bookId);

  if (bookIndex != -1) {
    tempBookList.splice(bookIndex, 1);
    localStorage.setItem('booksList', JSON.stringify(tempBookList));

    card.remove();

    const cardsOnCurrentPage =
      perPageLimit - (tempBookList.length % perPageLimit);

    if (cardsOnCurrentPage === perPageLimit && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }

    setCurrentPage(currentPage);
    renderPagination();
  }
}
