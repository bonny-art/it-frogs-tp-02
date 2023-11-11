/**
  |============================
 эти 3 функции от Анны дают доступ к API для получения информации о списке книг, 
 топовых книгах и книгах по категориям.
  |============================
*/
import { fetchBookList, fetchTopBooks, fetchBooksOfCategory } from './api';
import { createSelectedCategory } from './selected-category-sec';

// import Notiflix from 'notiflix';

// Получаем ссылку на элемент списка категорий
const mainCategoriesList = document.querySelector('.main-categories-list');

// "async" запрос данных о списке книг с сервера и
// формируем HTML-разметку для списка категорий, а разметку вставляем в item
(async () => {
  try {
    const result = await fetchBookList();
    const markup = result.data
      .map(
        item => `<li class="main-categories-list-item">${item.list_name}</li>`
      )
      .join('');
    mainCategoriesList.innerHTML =
      '<li class="main-categories-list-item main-categories-list-item-active">All categories</li>' +
      markup;
  } catch (error) {
    console.error('An error:', error);
  }
})();

// Слушатель события для клика по категории:

mainCategoriesList.addEventListener('click', handleCategoryClick);

// Обработчик события для клика по категории:

// проверяется, был ли клик по элементу с классом 'main-categories-list-item'.
// Если да, то происходит удаление класса 'main-categories-list-item-active' у всех элементов списка и добавление этого класса к элементу, по которому был сделан клик.
// Затем, в зависимости от выбранной категории, делается запрос на сервер для получения соответствующих данных.
// Если выбрана категория 'All categories', вызывается функция xxx с результатами запроса fetchTopBooks().
// В противном случае вызывается функция yyy с результатами запроса fetchBooksOfCategory() и текстом выбранной категории.
// В случае возникновения ошибки при выполнении запроса, выводится сообщение об ошибке в консоль.

async function handleCategoryClick(event) {
  if (event.target.classList.contains('main-categories-list-item')) {
    for (const item of mainCategoriesList.children) {
      item.classList.remove('main-categories-list-item-active');
    }

    event.target.classList.add('main-categories-list-item-active');

    try {
      if (event.target.textContent === 'All categories') {
        const result = await fetchTopBooks();
        xxx(result);
      } else {
        const result = await createSelectedCategory(event.target.textContent);
        yyy(result, event.target.textContent);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
}

// fetchTopBooks fetchBooksOfCategory createSelectedCategory createTopBooks

// ==============================================================

// import { fetchBookList, fetchTopBooks, fetchBooksOfCategory } from './api';

// const mainCategoriesList = document.querySelector('.main-categories-list');

// (() => {
//   fetchBookList().then(result => {
//     const markup = result.data
//       .map(item => {
//         return `<li class="main-categories-list-item">${item.list_name}</li>`;
//       })
//       .join('');
//     mainCategoriesList.innerHTML =
//       '<li class="main-categories-list-item main-categories-list-item-active">All categories</li>' +
//       markup;
//   });
// })();

// mainCategoriesList.addEventListener('click', event => {
//   if (event.target.classList.contains('main-categories-list-item')) {
//     for (const item of mainCategoriesList.children) {
//       item.classList.remove('main-categories-list-item-active');
//     }

//     event.target.classList.add('main-categories-list-item-active');

//     if (event.target.textContent === 'All categories') {
//       fetchTopBooks().then(result => {
//         xxx(result);
//       });
//     } else {
//       fetchBooksOfCategory(event.target.textContent).then(result => {
//         zzz(result, event.target.textContent);
//       });
//     }
//   }
// });

// import { xxx, zzz } from './selected-category-sec';

// ===============================================================

// mainCategoriesList.addEventListener('click', async event => {
//   if (event.target.classList.contains('main-categories-list-item')) {
//     for (const item of mainCategoriesList.children) {
//       item.classList.remove('main-categories-list-item-active');
//     }

//     event.target.classList.add('main-categories-list-item-active');

//     try {
//       if (event.target.textContent === 'All categories') {
//         await displayAllBooks();
//       } else {
//         const category = event.target.textContent;
//         await displayCategoryBooks(category);
//       }
//     } catch (error) {
//       console.error('An error occurred:', error);
//     }
//   }
// });

/**
  |============================
  | Загрузка категорий при старте страницы
  |============================
*/

// (async () => {
//   try {
//     const categories = await fetchBookList();
//     // Отображение категорий на странице, например, в выпадающем списке.
//     displayCategories(categories);
//   } catch (error) {
//     console.error('An error occurred:', error);
//   }
// })();

// mainCategoriesList.addEventListener('click', async event => {
//   if (event.target.classList.contains('main-categories-list-item')) {
//     for (const item of mainCategoriesList.children) {
//       item.classList.remove('main-categories-list-item-active');
//     }

//     event.target.classList.add('main-categories-list-item-active');

//     try {
//       if (event.target.textContent === 'All categories') {
//         // Отображение всех книг на странице
//         await displayAllBooks();
//       } else {
//         const category = event.target.textContent;
//         // Отображение книг в выбранной категории на странице
//         await displayCategoryBooks(category);
//       }
//     } catch (error) {
//       console.error('An error occurred:', error);
//     }
//   }
// });

// async function displayAllBooks() {
//   try {
//     // Получение топовых книг из каждой категории
//     const topBooks = await fetchTopBooks();
//     // Отображение полученных книг на странице
//     displayBooks(topBooks);
//   } catch (error) {
//     console.error('An error occurred:', error);
//   }
// }

// async function displayCategoryBooks(category) {
//   try {
//     // Получение книг из выбранной категории
//     const books = await fetchBooksOfCategory(category);
//     // Отображение полученных книг на странице
//     displayBooks(books);
//   } catch (error) {
//     console.error('An error occurred:', error);
//   }
// }

// function displayCategories(categories) {
//   //  логика для отображения категорий на странице,
// }

// function displayBooks(books) {
//   // логика для отображениякниг на странице,
// }
