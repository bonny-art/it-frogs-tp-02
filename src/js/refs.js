const el = {
  mainCategoriesList: document.querySelector('.main-categories-list'),

  categoryTitle: document.querySelector('.js-category-title'),
  categoryBox: '',

  list: document.querySelector('.content'),

  topOfCatecory: '',
  buttonSeeMore: '',

  shoppingList: document.querySelector('.js-shopping-list'),
  emptyPage: document.querySelector('.js-empty-page'),

  body: document.querySelector('body'),
  toggleBtn: document.querySelector('.tgl-btn'),
  toggleIcon: document.querySelector('.tgl-btn__icon'),

  bookPopup: '',
  buttonAddToList: '',
  closeModalButton: '',
  textUnderRemoveButton: '',
  bookPopupImage: '',
  bookPopupCover: '',
  // shoping list

  // shoping list pagination

  paginationContainer: document.querySelector('.pagination'),
  paginationNumbers: document.getElementById('pagination-numbers'),
  nextButton: document.getElementById('next-button'),
  prevButton: document.getElementById('prev-button'),
  toEnd: document.getElementById('to-end-button'),
  toStart: document.getElementById('to-start-button'),
};

export { el };

export default function getRefs() {
  return {
    // home page wrapper for dynamically rendered book collections
    bookCollectionWrapper: document.querySelector('.book-collection-wrapper'),
  };
}
