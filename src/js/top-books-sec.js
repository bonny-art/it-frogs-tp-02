async function createTopBooks() {
  try {
    const result = await fetch('https://books-backend.p.goit.global/books/top-books');
    const bookData = await result.json();
    console.log(bookData);

    const markup = bookData.map((book, index) => `
      <div>
        <h3 class="top-title">${book.list_name}</h3>
        <div class="swiper">
          <ul class="list-item swiper-wrapper">
            ${book.books.slice(0, 5).map((book, i) => `
              <li class="li-top js-click-on-book swiper-slide" data-id="${index}-${i}">
                <img class="img-top" src="${book.book_image}" alt="" />
                <p class="top-bookTitle">${book.title}</p>
                <p class="top-bookAuthor">${book.author}</p>
              </li>`).join("")}
          </ul>
        </div>
        <div class="top-button">
          <button class="top-bth top-bth-js" type="submit">see more</button>
        </div>
      </div>`).join("");

    const list = document.getElementById('list');
    list.innerHTML = markup;

  } catch (error) {
    console.error('Помилка отримання або обробки даних:', error);
    // Notiflix.Notify.failure('Помилка отримання або обробки даних:', error);
  }

  const button = document.querySelector(".top-bth-js");
  button.addEventListener("click", handleClick);
}

function handleClick() {
  location.reload();
}

createTopBooks();

