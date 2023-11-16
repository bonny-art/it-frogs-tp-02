import { fetchTopBooks } from './api';
import { createBookCard } from './book-popup';
import { el } from './refs';
import { createSelectedCategory } from './selected-category-sec';
import { showLoader, hideLoader } from './loader';
import Swiper from 'swiper';
import Swal from 'sweetalert2';

if (document.getElementById('index') !== null) {
  createTopBooks();
}

function createTopBooks() {
  showLoader();

  fetchTopBooks()
    .then(bookData => {
      const markup = bookData
        .map(
          book => `
      <div>
    <h2 class="top-title">${book.list_name}</h2>
    <div class="swiper">
      <ul class="list-item swiper-wrapper">
        ${book.books
          .slice(0, 5)
          .map(
            book => `
          <li class="li-top js-book-on-click swiper-slide" data-id="${
            book._id
          }"> 
              <div class="card">
               <img class="img-top" 
     src="${book.book_image || './images/shopping-list-sec/plug_x1.webp'}"
     srcset="${
       book.book_image || './images/shopping-list-sec/plug_x1.webp'
     } 1x, 
             ${book.book_image || './images/shopping-list-sec/plug_x2.webp'} 2x"
     sizes="(max-width: 600px) 300px,
            (max-width: 1200px) 600px,
            1000px"
     alt="Зображення відсутнє" 
     onerror="this.onerror=null; this.src='./images/shopping-list-sec/plug_x1.webp'; this.srcset='./images/shopping-list-sec/plug_x2.webp';"  />
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
      if (document.getElementById('index') === null) {
        return;
      }
      const markupCatch = `
    <div>
      <img src="./images/shopping-list-sec/empty_page_tablet_1x.webp.png"
      srcset="./images/shopping-list-sec/empty_page_tablet_1x.webp 1x,./images/shopping-list-sec/empty_page_tablet_2x.webp 2x" alt="">
    </div>`;
      el.list.innerHTML = markupCatch;
      Swal.fire({
        title: 'Something went wrong!',
        text: 'Try reload the page.',
        icon: 'error',
        confirmButtonText: 'Ok',
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
