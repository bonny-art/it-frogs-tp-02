import Notiflix from 'notiflix';

import { fetchBooksOfCategory } from '../js/api.js'



const refs = {
    categoryTitle: document.querySelector('.js-category-title'),
    categoryBox: document.querySelector('.js-category-box'),
}


try {
    
const arrOfBooks = await fetchBooksOfCategory("Childrens Middle Grade Hardcover")

const markUp = createMarkupCategory(arrOfBooks);
    
refs.categoryBox.insertAdjacentHTML("afterbegin", markUp);

} catch (error) {
    console.log(error);
    // Notiflix.Notify.info('Sorry, there are no books matching your search query. Please try again.')
}



function createMarkupCategory(arr) {
    return arr.map(({author, book_image, title}) => {
        `<li class="card-wrapper">
            <img src="${book_image}" alt="${title}" />
            <h2 class="book-title">${title}</h2>
            <p class="book-author">${author}</p>
        </li>`
     } ).join('');
}