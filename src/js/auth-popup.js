document.addEventListener('DOMContentLoaded', function () {
  const loginBtn = document.getElementById('open-authCard');
  const modal = document.getElementById('modal');
  const overlay = document.getElementById('overlay');
  const closeModalBtn = document.getElementById('close-modal-btn');

  loginBtn.addEventListener('click', () => {
    modal.classList.add('active');
    overlay.style.display = 'block';
  });

  closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    overlay.style.display = 'none';
  });

  // Закрытие модального окна по нажатию клавиши ESC
  window.addEventListener('keydown', event => {
    if (event.key === 'Escape' && modal.classList.contains('active')) {
      modal.classList.remove('active');
      overlay.style.display = 'none';
    }
  });
});
