import { fetchBooksOfCategory } from './api.js';
import { createBookCard } from './book-popup';
import { el } from './refs.js';
import { showLoader, hideLoader } from './loader.js';
import Swal from 'sweetalert2';

/**
  |============================
  | test arr
  |============================
*/

// const arrOfBooks = [
//   {
//   age_group: "",
// amazon_product_url: "https://www.amazon.com/Complete-Cookbook-Young-Chefs/dp/1492670022?tag=NYTBSREV-20",
// article_chapter_link: "",
// author: "America's Test Kitchen Kids",
// book_image: "https://storage.googleapis.com/du-prd/books/images/9781492670025.jpg",
// book_image_height: 419,
// book_image_width: 330,
// book_review_link: "",
// book_uri: "nyt://book/894e62dd-9e61-570a-ad32-6f4617d323e5",
// buy_links: (6) [{}, {}, {}, {}, {}, {}],
// contributor: "by America's Test Kitchen Kids",
// contributor_note: "",
// created_date: "2023-04-05 22:05:24",
// date: "2023-04-09T09:28:38.980Z",
// description: "Over 100 kid-tested recipes from America's Test Kitchen.",
// first_chapter_link: "",
// list_name: "Childrens Middle Grade Hardcover",
// price: "0.00",
// primary_isbn10: "1492670022",
// primary_isbn13: "9781492670025",
// publisher: "Sourcebooks Jabberwocky",
// rank: 3,
// rank_last_week: 5,
// sunday_review_link: "",
// title: "THE COMPLETE COOKBOOK FOR YOUNG CHEFS",
// updated_date: "2023-04-05 22:10:14",
// weeks_on_list: 147,
// _id: "643282b1e85766588626a0ca"
//   },
//   {
//     amazon_product_url: "https://www.amazon.com/Complete-Cookbook-Young-Chefs/dp/1492670022?tag=NYTBSREV-20",
// article_chapter_link: "",
// author: "Amina Luqman-Dawson",
// book_image: "",
// book_image_height: 419,
// book_image_width: 330,
// book_review_link: "",
// book_uri: "nyt://book/894e62dd-9e61-570a-ad32-6f4617d323e5",
// buy_links: (6) [{}, {}, {}, {}, {}, {}],
// contributor: "by America's Test Kitchen Kids",
// contributor_note: "",
// created_date: "2023-04-05 22:05:24",
// date: "2023-04-09T09:28:38.980Z",
// description: "Over 100 kid-tested recipes from America's Test Kitchen.",
// first_chapter_link: "",
// list_name: "Childrens Middle Grade Hardcover",
// price: "0.00",
// primary_isbn10: "1492670022",
// primary_isbn13: "9781492670025",
// publisher: "Sourcebooks Jabberwocky",
// rank: 3,
// rank_last_week: 5,
// sunday_review_link: "",
// title: "THE COMPLETE COOKBOOK FOR YOUNG CHEFS",
// updated_date: "2023-04-05 22:10:14",
// weeks_on_list: 147,
// _id: "643282b2e85766588626a166"
//   },
//   {
//         amazon_product_url: "https://www.amazon.com/Complete-Cookbook-Young-Chefs/dp/1492670022?tag=NYTBSREV-20",
// article_chapter_link: "",
// author: "Kelly Yang",
// book_image: "https://storage.googleapis.com/du-prd/books/images/97805458808315.jpg",
// book_image_height: 419,
// book_image_width: 330,
// book_review_link: "",
// book_uri: "nyt://book/894e62dd-9e61-570a-ad32-6f4617d323e5",
// buy_links: (6) [{}, {}, {}, {}, {}, {}],
// contributor: "by America's Test Kitchen Kids",
// contributor_note: "",
// created_date: "2023-04-05 22:05:24",
// date: "2023-04-09T09:28:38.980Z",
// description: "Over 100 kid-tested recipes from America's Test Kitchen.",
// first_chapter_link: "",
// list_name: "Childrens Middle Grade Hardcover",
// price: "0.00",
// primary_isbn10: "1492670022",
// primary_isbn13: "9781492670025",
// publisher: "Sourcebooks Jabberwocky",
// rank: 3,
// rank_last_week: 5,
// sunday_review_link: "",
// title: "FINALLY SEEN",
// updated_date: "2023-04-05 22:10:14",
// weeks_on_list: 147,
// _id: "643282b2e85766588626a166"
//   }
// ]






/**
 * Функція приймає параметром назву категорії у вигляді стрінги, робить запит на бекенд, створює розмітку і рендерить
 * @param {string} category
 */

async function createSelectedCategory(category) {
  try {

    // show loader

    showLoader();
    const arrOfBooks = await fetchBooksOfCategory(category);
    const markUp = createMarkupCategory(arrOfBooks);
    const styledTitle = styleSectionTitle(category);

    el.list.innerHTML =
      `<h1 class="selected-category-title js-category-title">${styledTitle}</h1>
       <ul class="selected-category-list js-category-box">` +
             markUp +
       '</ul>';
      
    el.categoryBox = document.querySelector('.js-category-box');
    el.categoryBox.addEventListener('click', createBookCard);
    
  } catch (error) {

    console.log(error);
    el.list.innerHTML = `<img src="./images/shopping-list-sec/empty_page_tablet_2x.png"
                        alt="Empty page image"
                        />`;
    
    Swal.fire({
         title: 'Error!',
         text: 'Something went wrong! Try reload the page.',
         confirmButtonText: 'OK',
         imageUrl: "./images/sad.svg",
         imageWidth: 40
})
     } finally {
    hideLoader();
  }
}


// стилізація назви секції

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
                   <img class="selected-category-img" src="${book_image}" 
                    alt="The cover of ${title}" onerror="this.onerror=null; this.src='./images/background_error.png';" />
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