import getRefs from './refs';
const refs = getRefs();

// top book (bestsellers) collection rendering function

function markupCategoryBlock(category) {
  const bookCard = category.books
    .map(
      book => `<li class="book-card">
            <a class="book-link" href="">
              <img
                src="${book.book_image}"
                alt="book image"
                width="100%"
                loading="lazy"
              />
              <div class="info">
                <p class="book-title">
                  ${book.title}
                </p>
                <p class="book-author">
                  ${book.author}
                </p>
              </div>
            </a>
          </li>`
    )
    .join('');
  return `<div class="category-block">
            <h3>${category.list_name}</h3>
            <ul class="category-books">
            ${bookCard}
            </ul>
            <button>more</button>
          </div>`;
}

function insertCategoryBlocks(category) {
  return refs.bookCollectionWrapper.insertAdjacentHTML(
    'beforeend',
    markupCategoryBlock(category)
  );
}


// Support Ukraine 
export function createMarkup(arr) {

    return arr.map(({id, title, url, img, img2x }) => `
        <li class="support-items">
            <a class="support-link" href="${url}" target="_blank" rel="noopener noreferrer">
                <span>0${id}</span>
                <img class="support-img" src="${img}" alt="${title}" srcset="${img} 1x, ${img2x} 2x" height="32">
            </a>
        </li>
        `)
    .join('');
    
}

export default { insertCategoryBlocks };