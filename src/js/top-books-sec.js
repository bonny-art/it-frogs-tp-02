  async function createTopBooks() {
    try {
        const reselt = await fetch('https://books-backend.p.goit.global/books/top-books');
        const bookData = await reselt.json();
        console.log(bookData);

        const markup = bookData.map((book) => `<div>
        <h3 class="top-title">${book.list_name}</h3>
<ul class="list-item ">
  <li class="li-top">
    <img class="img-top" src="${book.books[0].book_image}" alt="" />
    <p class="top-bookTitle">${book.books[0].title}</p>
    <p class="top-bookAuthor">${book.books[0].author}</p>
  </li>
  <li class="li-top">
    <img class="img-top" src="${book.books[1].book_image}" alt="" />
    <p class="top-bookTitle">${book.books[1].title}</p>
    <p class="top-bookAuthor">${book.books[1].author}</p>
  </li>
  <li class="li-top">
    <img class="img-top" src="${book.books[2].book_image}" alt="" />
    <p class="top-bookTitle">${book.books[2].title}</p>
    <p class="top-bookAuthor">${book.books[2].author}</p>
  </li>
  <li class="li-top">
    <img class="img-top" src="${book.books[3].book_image}" alt="" />
    <p class="top-bookTitle">${book.books[3].title}</p>
    <p class="top-bookAuthor">${book.books[3].author}</p>
  </li>
  <li class="li-top">
    <img class="img-top" src="${book.books[4].book_image}" alt="" />
    <p class="top-bookTitle">${book.books[4].title}</p>
    <p class="top-bookAuthor">${book.books[4].author}</p>
  </li>
</ul>
<div class="top-button"><button class="top-bth" type="submit">see more</button></div>
        </div>`).join("");

        
        const list = document.getElementById('list');

        // Додаємо всі розмітки до елемента списку
        list.innerHTML = markup;
    } catch (error) {
        console.error('Помилка отримання або обробки даних:', error);
    }
}

createTopBooks();

