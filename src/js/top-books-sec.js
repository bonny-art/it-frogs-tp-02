// import fetchTopBooks from api.js
async function createTopBooks() {
  try {
    const loader = document.getElementById('loader');
    loader.style.display = 'block'
    const result = await fetch('https://books-backend.p.goit.global/books/top-books');
    const bookData = await result.json();

    const markup = bookData.map((book, index) => `
      <div>
        <h3 class="top-title">${book.list_name}</h3>
        <div class="swiper">
          <ul class="list-item swiper-wrapper">
            ${book.books.slice(0, 5).map((book, i) => `
              <li class="li-top js-click-on-book swiper-slide" data-id="${index}-${i}">
               <img class="img-top" src="${book.book_image || './images/shopping-list-sec/empty_page_mobile_1x.png'}" alt="Зображення відсутнє" />
                <p class="top-bookTitle">${book.title}</p>
                <p class="top-bookAuthor">${book.author}</p>
              </li>`).join("")}
          </ul>
        </div>
      </div>
      <div class="top-button">
          <button class="top-bth top-bth-js" type="submit">see more</button>
        </div>
      `).join("");

    const list = document.getElementById('list');
    list.innerHTML = markup;
    // создана кнопка See more и функция handleClick для логики нажатия на кнопку
  const button = document.querySelectorAll(".top-bth-js");
  button.forEach((button) => {
      button.addEventListener("click", handleClick);
    });

  } catch (error) {
    console.log('Помилка отримання або обробки даних:', error);
    // Notiflix.Notify.failure('Помилка отримання або обробки даних:', error);
  }
  finally {
     const loader = document.getElementById('loader');
     loader.style.display = 'none'
   }
  
}
// функция для логики нажатия на кнопку see more
function handleClick() {
  // для проверки работает она или нет поставил перезагружаться по нажатию
  location.reload(); 
}

createTopBooks();






