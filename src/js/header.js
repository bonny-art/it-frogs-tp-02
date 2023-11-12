import { handlerActionAuth, initAuthModal } from './auth-popup';
import { isAuthUser, getUserName, logOutUser } from './auth-firebase';
//ініціалізуємо початкові стани хедера
document.addEventListener('DOMContentLoaded', function () {
  let currentUrl = window.location.href;
  let menuItems = document.querySelectorAll('.nav-item');

  menuItems.forEach(function (item) {
    let link = item.querySelector('a');
    if (link.href === currentUrl) {
      item.classList.add('active-page');
    }
  });
  getNameForUpdateHeaderUser().then(login => {
    // console.log(login);
    let menuAuthIcon = document.querySelector('.menu-auth-icon use');
    let authLink = document.querySelector('.auth-link');
    let userSignOut = document.querySelector('.sign-out');
    let headerUser = document.querySelector('.sign-up');
    if (login) {
      menuAuthIcon.setAttribute(
        'href',
        '/images/header/header-defs.svg#icon-fi-ss-caret-down-1'
      );
      authLink.classList.remove('visually-hidden');
      userSignOut.classList.remove('visually-hidden');
      headerUser.classList.add('visually-hidden');
    } else {
      menuAuthIcon.setAttribute(
        'href',
        '/images/header/header-defs.svg#icon-arrow-narrow-right-1'
      );
      authLink.classList.add('visually-hidden');
      userSignOut.classList.add('visually-hidden');
      headerUser.classList.remove('visually-hidden');
    }
  });
});
const headerUser = document.querySelector('.sign-up');
const authModal = document.querySelector('.auth-modal');
const headerUserName = document.querySelector('.user-signed');
const headerUserLogo = document.querySelector('.menu-auth-logo');
const userSignOut = document.querySelector('.sign-out');
const logOut = document.querySelector('.js-logout');

//отримуємо ім'я користувача
async function getNameForUpdateHeaderUser() {
  const login = await isAuthUser();
  // console.log(login);
  if (login) {
    getUserName().then(getUserNameRes => {
      updateHeaderUser(getUserNameRes.data().name);
    });
  }
  return login;
}
//запуск модального вікна
headerUser.addEventListener('click', () => {
  authModal.classList.remove('visually-hidden');
  initAuthModal();
  handlerActionAuth();
});
userSignOut.addEventListener('click', () => {
  logOut.classList.remove('visually-hidden');
});
logOut.addEventListener('click', () => {
  logOutUser();
  // location.reload();
  window.location.href = 'index.html';
});
//оновлюємо напис на кнопці, показуємо фото
const updateHeaderUser = userName => {
  headerUserName.textContent = userName;
  headerUserLogo.classList.remove('visually-hidden');
};

const mobileMenuButton = document.querySelector('.nav-mobile-menu');
const burgerIcon = document.querySelector('.burger use');

// Відслідковуємо відкриття мобільного меню
let isMobileMenuOpen = false;

mobileMenuButton.addEventListener('click', toggleMobileMenu);
// Обробка кліку на бургер
function toggleMobileMenu() {
  isMobileMenuOpen = !isMobileMenuOpen;

  //Змінюємо іконку та відкриваємо/закриваємо меню
  if (isMobileMenuOpen) {
    burgerIcon.setAttribute(
      'href',
      '/images/header/header-defs.svg#icon-close-1'
    );
    openMobileMenu();
  } else {
    burgerIcon.setAttribute(
      'href',
      '/images/header/header-defs.svg#icon-burger-1'
    );
    closeMobileMenu();
  }
}

function openMobileMenu() {
  console.log('Мобильное меню открыто');
}

function closeMobileMenu() {
  console.log('Мобильное меню закрыто');
}

export { updateHeaderUser, getNameForUpdateHeaderUser };
