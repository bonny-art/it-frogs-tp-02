const scrollToTopBtn = document.querySelector('#scrollToTopButton');
// Додаємо обробник події при прокручуванні сторінки
window.addEventListener('scroll', () => {
    // Показуємо або приховуємо кнопку залежно від положення сторінки
  if (window.pageYOffset > 500) {
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }
});
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});