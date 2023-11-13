import { fetchTopBooks } from './api';
import { createBookCard } from './book-popup';
import { el } from './refs';
import { createSelectedCategory } from './selected-category-sec';

createTopBooks();

function createTopBooks() {
  fetchTopBooks()
    .then(bookData => {
      const markup = bookData.map((book, index) => `
      <div>
        <h3 class="top-title">${book.list_name}</h3>
        <div class="swiper">
          <ul class="list-item swiper-wrapper">
            ${book.books.slice(0, 5).map((book) => `
              <li class="li-top js-book-on-click swiper-slide" data-id="${book._id}">
               <img class="img-top" src="${book.book_image || './images/shopping-list-sec/empty_page_mobile_1x.png'}" alt="Зображення відсутнє" />
                <p class="top-bookTitle">${book.title}</p>
                <p class="top-bookAuthor">${book.author}</p>
              </li>`).join("")}
          </ul>
        </div>
      </div>
      <div class="top-button">
          <button class="top-bth top-bth-js" data-category="${book.list_name}" type="submit">see more</button>
        </div>
      `).join("");
        
      // Додаємо всі розмітки до елемента списку
      el.list.innerHTML =
        '<h1 class="top-title-boks">Best Sellers <span class="top-title-span">Books</span></h1><div class="list-top" id="list">' +
        markup +
        '</div>';

      el.topOfCatecory = document.querySelectorAll('.list-item');
      el.topOfCatecory.forEach(oneTopCategory =>
        oneTopCategory.addEventListener('click', createBookCard)  
      );

    el.buttonSeeMore = document.querySelectorAll(".top-bth-js");
        el.buttonSeeMore.forEach((button) => {
      button.addEventListener("click", handleSeeMore);
    });
    })
    .catch(error => {
      console.error('Помилка отримання або обробки даних:', error);
    })
    .finally(() => {});
}

function handleSeeMore(ev) {
    
    console.log("123123",ev.currentTarget);
    const categoryTittle = ev.target.dataset.category.trim();
    // для проверки работает она или нет поставил перезагружаться по нажатию
    createSelectedCategory(categoryTittle);
}
export { createTopBooks };