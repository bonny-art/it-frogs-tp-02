function createMarkup(arr) {
  return arr
    .map(
      ({ cover, title, author, descr }) => `
  <div class="book-image">
    <img class="img-book-cover" src="" alt="" />
  </div>
  <div>
    <h2 class="book-title"></h2>
    <p class="book-author"></p>
    <p class="book-descr"></p>
    <ul>
      <li><img class="book-store" src="" alt="" /></li>
      <li><img class="book-img" src="" alt="" /></li>
    </ul>
  </div>
  <button class="add-to-list"></button>
  `
    )
    .join('');
}
