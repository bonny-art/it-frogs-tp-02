import { el } from './refs';
import plugx2 from './../images/shopping-list-sec/plug_x2.webp';
import plugx1 from './../images/shopping-list-sec/plug_x1.webp';
import trash from '/images/shopping-list-sec/sprite.svg';
import amazon from '/images/book-popup/amazon@1x.webp';
import amazonx2 from '/images/book-popup/amazon@2x.webp';
import appleBooks from '/images/book-popup/apple@1x.webp';
import appleBooksx2 from '/images/book-popup/apple@2x.webp';

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

function loadFallbackImage(e) {
  e.target.classList.add('hidden');
  let img = document.createElement('img');
  img.srcset = `${plugx2} 2x, ${plugx1} 1x`;
  img.src = `${plugx1}`;
  img.alt = 'plug';
  document.querySelector('.image-thumb').appendChild(img);
}

function getFromLocalStorage() {
  const tempBookList = JSON.parse(localStorage.getItem('booksList'));
  if (tempBookList) {
    return tempBookList;
  } else {
    return [];
  }
}

function getPerPageLimit() {
  if (window.innerWidth <= 767) {
    return 4;
  } else {
    return 3;
  }
}

function getVisibleButtons() {
  if (window.innerWidth <= 767) {
    return 2;
  } else {
    return 3;
  }
}

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
  if (document.getElementById('shopping') === null) {
    return;
  }

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
  document
    .querySelectorAll('.shopping-book-cover')
    .forEach(bookCover =>
      bookCover.addEventListener('error', loadFallbackImage)
    );
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
                  <img class="shopping-book-cover" src="${book.book_image}" alt="${book.title}"/>
                </div>
                <div class="card-info">
                    <h3 class="shopping-book-title">${book.title}</h3>
                    <p class="shopping-book-category">${book.list_name}</p>
                    <p class="shopping-book-description">${book.description}</p>
                    <p class="shopping-book-author">${book.author}</p>
                </div>
                <button type="button" class="delete-btn js-delete-book">
                    <svg class="delete-svg" width="16" height="16">
                        <use href="${trash}#trash"></use>
                    </svg>
                </button>
                <div class="trade-fairs">
                  <a href="${book.buy_links[0].url}" target="_blank" rel="noopener noreferrer">
                    <img class="amazon-img" srcset="${amazon} 1x, ${amazonx2} 2x" width="32" height="11"/>
                  </a>
                  <a href="${book.buy_links[1].url}" target="_blank" rel="noopener noreferrer">
                    <img class="apple-books-img" srcset="${appleBooks} 1x, ${appleBooksx2} 2x" width="16" height="16"/>
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
