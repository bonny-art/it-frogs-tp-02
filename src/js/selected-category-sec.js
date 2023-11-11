import Notiflix from 'notiflix';

import { fetchBooksOfCategory } from '../js/api.js'
import { el } from './refs.js';




/**
 * Функція приймає параметром назву категорії у вигляді стрінги, робить запит на бекенд, створює розмітку і рендерить
 * @param {string} category 
 */
async function createSelectedCategory(category){

    try {
    
    const arrOfBooks = await fetchBooksOfCategory(category)
    const markUp = createMarkupCategory(arrOfBooks);
    const styledTitle = styleSectionTitle(category);
        
    el.categoryBox.insertAdjacentHTML("afterbegin", markUp);
          
    el.categoryTitle.innerHTML = styledTitle;

  
} catch (error) {
    console.log(error);
    // Notiflix.Notify.info('Sorry, there are no books matching your search query. Please try again.')
}
}

createSelectedCategory("Hardcover Fiction");

el.categoryBox.addEventListener("click", handlerSelectBook);



function handlerSelectBook(evt) {
    if (evt.target === evt.currentTarget){
        return;
    }
    
    const currentBook = evt.target.closest(".card-wrapper");
    const currentBookId = currentBook.dataset.id;
    console.dir(currentBookId);
    return currentBookId;
}



function styleSectionTitle(title) {
    const words = title.split(" ");
    const halfIndex = Math.ceil(words.length / 2);
    const firstHalf = words.slice(0, halfIndex).join(" ");
    const secondHalf = words.slice(halfIndex).join(" ");

    return `
        ${firstHalf} <span class="second-half">${secondHalf}</span>
    `;
};



function createMarkupCategory(arr) {
    return arr.map(({author, title, book_image, _id}) => {
        return `<li class="card-wrapper" data-id="${_id}">
                   <div class="book-img">
                      <img src="${book_image}" alt="${title}">
                   </div>
                   <h2 class="book-title">${title}</h2>
                   <p class="book-author">${author}</p>
                </li>
   `})
    .join("")
};



export { createSelectedCategory };
