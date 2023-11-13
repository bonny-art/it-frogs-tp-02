import { fetchBooksOfCategory } from './api.js';
import { createBookCard } from './book-popup';
import { el } from './refs.js';
import { showLoader, hideLoader } from './loader.js';
import Swal from 'sweetalert2';



/**
 * Функція приймає параметром назву категорії у вигляді стрінги, робить запит на бекенд, створює розмітку і рендерить
 * @param {string} category
 */
async function createSelectedCategory(category) {
  try {
    showLoader();
    const arrOfBooks = await fetchBooksOfCategory(category);
    const markUp = createMarkupCategory(arrOfBooks);
    const styledTitle = styleSectionTitle(category);

    el.list.innerHTML =
      `<h1 class="selected-category-title js-category-title">${styledTitle}</h1><ul class="selected-category-list js-category-box">` +
      markUp + '</ul>';
      
    el.categoryBox = document.querySelector('.js-category-box');
    el.categoryBox.addEventListener('click', createBookCard);
    
  } catch (error) {
    console.log(error);
    Swal.fire({
         title: 'Error!',
         text: 'Something went wrong! Try reload the page.',
         confirmButtonText: 'OK',
         imageUrl: "./images/sad.svg",
         imageWidth: 40
})
    // Swal.fire('Oops...', 'Something went wrong!', 'error')
  } finally {
    hideLoader();
  }
}


function styleSectionTitle(title) {
  const words = title.split(' ');
  const halfIndex = Math.ceil(words.length / 2);
  const firstHalf = words.slice(0, halfIndex).join(' ');
  const secondHalf = words.slice(halfIndex).join(' ');

  return `
        ${firstHalf} <span class="second-half">${secondHalf}</span>
    `;
}



function createMarkupCategory(arr) {
  return arr
    .map(({ author, title, book_image, _id }) => {
      return `<li class="card-wrapper  js-book-on-click" data-id="${_id}">
                 <div class="selected-category-img-box">
                   <img class="selected-category-img" src="{book_image}" alt="${title}">
                   <div class="selected-category-overlay">
                   <p class="selected-category-overlay-text">quick view</p>
                   </div>
                 </div>
                 <h2 class="selected-category-book-title">${title}</h2>
                 <p class="selected-category-book-author">${author}</p>
                </li>
   `;
    })
    .join('');
}




export { createSelectedCategory };