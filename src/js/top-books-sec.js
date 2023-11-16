import { fetchTopBooks } from './api';
import { createBookCard } from './book-popup';
import { el } from './refs';
import { createSelectedCategory } from './selected-category-sec';
// import Notiflix from 'notiflix';
import { showLoader, hideLoader } from './loader';
import Swiper from 'swiper';
import Swal from 'sweetalert2';

createTopBooks();

function createTopBooks() {
  showLoader();
  fetchTopBooks()
    .then(bookData => {
      const markup = bookData
        .map(
          book => `
      <div>
    <h3 class="top-title">${book.list_name}</h3>
    <div class="swiper">
      <ul class="list-item swiper-wrapper">
        ${book.books
          .slice(0, 5)
          .map(
            book => `
          <li class="li-top js-book-on-click swiper-slide" data-id="${
            book._id
          }">
            <!-- Ваш код для карточки тут -->
            
              <div class="card">
                <img class="img-top" src="${
                  book.book_image || './images/shopping-list-sec/plug_x1.png'
                }"
                     srcset="${
                       book.book_image ||
                       './images/shopping-list-sec/plug_x1.png'
                     } 1x, 
                             ${
                               book.book_image ||
                               './images/shopping-list-sec/plug_x2.png'
                             } 2x"  alt="Зображення відсутнє" onerror="this.onerror=null; this.src='./images/shopping-list-sec/plug_x1.png';" />
                <div class="overlay">
                
                  <p class="quick-view">quick view</p>
                </div>
              </div>
            
            <p class="top-bookTitle">${book.title}</p>
            <p class="top-bookAuthor">${book.author}</p>
          </li>`
          )
          .join('')}
      </ul>
    </div>
    <div class="swiper-pagination"></div>
    <div class="top-button">
      <button class="top-bth top-bth-js" data-category="${
        book.list_name
      }" type="submit">see more</button>
    </div>
  </div>`
        )
        .join('');

      el.list.innerHTML =
        '<h1 class="top-title-boks">Best Sellers <span class="top-title-span">Books</span></h1><div class="list-top" id="list">' +
        markup +
        '</div>';

      const swiperContainers = document.querySelectorAll('.swiper');
      swiperContainers.forEach(container => {
        new Swiper(container, {
          slidesPerView: 'auto',
          spaceBetween: 24,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          breakpoints: {
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
            1440: {
              slidesPerView: 5,
            },
          },
        });
      });

      el.topOfCatecory = document.querySelectorAll('.list-item');
      el.topOfCatecory.forEach(oneTopCategory =>
        oneTopCategory.addEventListener('click', createBookCard)
      );

      el.buttonSeeMore = document.querySelectorAll('.top-bth-js');
      el.buttonSeeMore.forEach(button => {
        button.addEventListener('click', handleSeeMore);
      });
    })
    .catch(error => {
      const markupCatch = `
    <div>
      <img src="./images/shopping-list-sec/empty_page_mobile_1x.png"
      srcset="./images/shopping-list-sec/empty_page_mobile_1x.png 1x,./images/shopping-list-sec/empty_page_mobile_2x.png 2x" alt="">
    </div>`;
      el.list.innerHTML = markupCatch;
      Swal.fire({
        title: 'Error!',
        text: 'Something went wrong! Try reload the page.',
        confirmButtonText: 'OK',
      });
    })
    .finally(() => {
      hideLoader();
    });
}

function handleSeeMore(ev) {
  const categoryTittle = ev.target.dataset.category.trim();

  createSelectedCategory(categoryTittle);
}
export { createTopBooks };
