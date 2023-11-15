import axios from 'axios';

axios.defaults.baseURL = 'https://books-backend.p.goit.global/books/';

/**
 * запит на отримання списку доступних категорій книг
 * @returns Array of categories books
 */

async function fetchBookList() {
  const resp = await axios.get(`category-list`).then(resp => resp.data);
  return resp;
}
// fetchBookList();

/**
 * запит на отримання топ 5 книг у кожній категорії
 * @returns Array of top books
 */
async function fetchTopBooks() {
  const resp = await axios.get(`top-books`).then(resp => resp.data);

  return resp;
}
// fetchTopBooks();

/**
 * функція приймає назву категорії (формат стрінг), повертає масив книг з повною інформацією
 * @returns Array of books
 */
async function fetchBooksOfCategory(category) {
  const resp = await axios
    .get(`category?category=${category}`)
    .then(resp => resp.data);
  return resp;
}
// fetchBooksOfCategory('Childrens Middle Grade Hardcover');

/**
 * функція приймає ID обраної книги у форматі стрінги і повертає масив інфо
 * @param {string} bookId
 * @returns Array of information about choosed book
 */
async function fetchBookById(bookId) {
  const resp = await axios.get(`${bookId}`).then(resp => resp.data);

  return resp;
}
// fetchBookById('643282b1e85766588626a0dc');

export { fetchBookById, fetchBookList, fetchTopBooks, fetchBooksOfCategory };
