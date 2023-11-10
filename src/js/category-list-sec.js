import { fetchBookList, fetchTopBooks, fetchBooksOfCategory } from './api';

// import { makeBlocks, makeTopBlocks } from './selected-category-sec';

const mainCategoriesList = document.querySelector('.main-categories-list');

(() => {
  fetchBookList().then(result => {
    const markup = result.data
      .map(item => {
        return `<li class="main-categories-list-item">${item.list_name}</li>`;
      })
      .join('');
    mainCategoriesList.innerHTML =
      '<li class="main-categories-list-item main-categories-list-item-active">All categories</li>' +
      markup;
  });
})();

mainCategoriesList.addEventListener('click', event => {
  if (event.target.classList.contains('main-categories-list-item')) {
    for (const item of mainCategoriesList.children) {
      item.classList.remove('main-categories-list-item-active');
    }

    event.target.classList.add('main-categories-list-item-active');

    if (event.target.textContent === 'All categories') {
      fetchTopBooks().then(result => {
        fromTopBlocks(result);
      });
    } else {
      fetchBooksOfCategory(event.target.textContent).then(result => {
        fromSelectedBlocks(result, event.target.textContent);
      });
    }
  }
});
