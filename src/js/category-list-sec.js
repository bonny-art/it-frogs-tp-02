import { fetchBookList, fetchTopBooks, fetchBooksOfCategory } from './api';
import { createSelectedCategory } from './selected-category-sec';
import { createTopBooks } from './top-books-sec';
import { showLoader, hideLoader } from './loader';
import { el } from './refs';

// "async" запрос данных о списке книг с сервера и
// формируем HTML-разметку для списка категорий, а разметку вставляем в item

(async () => {
  try {
    if (document.getElementById('index') === null) {
      return;
    }

    const result = await fetchBookList();

    // Сортировка категорий в алфавитном порядке
    const sortedCategories = result.map(item => item.list_name).sort();

    const markup = sortedCategories
      .map(category => `<li class="main-categories-list-item">${category}</li>`)
      .join('');

    el.mainCategoriesList.innerHTML =
      '<li class="main-categories-list-item main-categories-list-item-active">All categories</li>' +
      markup;

    // Слушатель события для клика по категории:

    el.mainCategoriesList.addEventListener('click', handleCategoryClick);
  } catch (error) {
    console.log('An error:', error);
  }
})();

// Обработчик события для клика по категории:

// проверяется, был ли клик по элементу с классом 'main-categories-list-item'.
// Если да, то происходит удаление класса 'main-categories-list-item-active' у всех элементов списка и добавление этого класса к элементу, по которому был сделан клик.
// Затем, в зависимости от выбранной категории, делается запрос на сервер для получения соответствующих данных.
// Если выбрана категория 'All categories', вызывается функция createTopBooks которая отрисовівает секцию Бествеллері.
// В противном случае вызывается функция createSelectedCategory, в которую передается название категории. Она отрисовівает секцию вібранной категории.
// В случае возникновения ошибки при выполнении запроса, выводится сообщение об ошибке в консоль.

async function handleCategoryClick(event) {
  if (event.target.classList.contains('main-categories-list-item')) {
    for (const item of el.mainCategoriesList.children) {
      item.classList.remove('main-categories-list-item-active');
    }

    event.target.classList.add('main-categories-list-item-active');

    try {
      if (event.target.textContent.trim() === 'All categories') {
        createTopBooks();
      } else {
        createSelectedCategory(event.target.textContent);
      }
    } catch (error) {
      console.log('An error occurred:', error);
    }
  }
}
