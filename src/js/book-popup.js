// function createMarkup(arr) {
//   return arr
//     .map(
//       ({ cover, title, author, descr }) => `
//   <div class="book-image">
//     <img class="img-book-cover" src="" alt="" />
//   </div>
//   <div>
//     <h2 class="book-title"></h2>
//     <p class="book-author"></p>
//     <p class="book-descr"></p>
//     <ul>
//       <li><img class="book-store" src="" alt="" /></li>
//       <li><img class="book-img" src="" alt="" /></li>
//     </ul>
//   </div>
//   <button class="add-to-list"></button>
//   `
//     )
//     .join('');
// }

getBookById(bookId)
  .then(data => {
    const url = data[0].url;
    const name = data[0].breeds[0].name;
    const description = data[0].breeds[0].description;
    const temperament = data[0].breeds[0].temperament;

    el.catCard.innerHTML = createCatMarkup(url, name, description, temperament);
    el.catCard.classList.remove('js-hidden');
  })
  .catch(error => {
    Notify.failure(`Error: ${error}`);
  })
  .finally(() => {
    el.loader.classList.add('js-hidden');
  });
