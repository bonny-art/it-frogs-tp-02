import { handlerActionAuth, initAuthModal } from './auth-popup';
import { isAuthUser, getUserName, logOutUser } from './auth-firebase';
import svgSprite from '/images/header/header-defs.svg';
import { el } from '../js/refs';

//ініціалізуємо початкові стани хедера
document.addEventListener('DOMContentLoaded', function () {
  let menuItems = document.querySelectorAll('.nav-item');

  switch (el.body.id) {
    case 'index':
      menuItems[0].classList.add('active-page');
      break;
    case 'shopping':
      menuItems[1].classList.add('active-page');
      break;

    default:
      menuItems[0].classList.add('active-page');
  }

  getNameForUpdateHeaderUser().then(login => {
    let menuAuthIcon = document.querySelector('.menu-auth-icon use');
    let authLink = document.querySelector('.auth-link');
    let userSignOut = document.querySelector('.sign-out');
    let headerUser = document.querySelector('.sign-up');
    if (login) {
      menuAuthIcon.setAttribute('href', `${svgSprite}#icon-down-1`);
      authLink.classList.remove('visually-hidden');
      userSignOut.classList.remove('visually-hidden');
      headerUser.classList.add('visually-hidden');
    } else {
      menuAuthIcon.setAttribute(
        'href',
        `${svgSprite}#icon-arrow-narrow-right-1`
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
const mobMenuUsername = document.querySelector('.mob-user-signed');
const headerUserLogo = document.querySelector('.menu-auth-logo');
const userSignOut = document.querySelector('.sign-out');
const logOut = document.querySelector('.js-logout');
const authUp = document.querySelector('.auth-up');
const authDown = document.querySelector('.auth-down');
authUp.classList.add('visually-hidden');
authDown.classList.remove('visually-hidden');

//отримуємо ім'я користувача
async function getNameForUpdateHeaderUser() {
  const login = await isAuthUser();
  if (login) {
    getUserName().then(getUserNameRes => {
      updateHeaderUser(getUserNameRes.data().name);
    });
  }
  return login;
}
//запуск модального вікна
headerUser.addEventListener('click', () => {
  document.body.classList.add('modal-open');
  authModal.classList.remove('visually-hidden');
  initAuthModal();
  handlerActionAuth();
});

userSignOut.addEventListener('click', () => {
  logOut.classList.toggle('visually-hidden');
  authDown.classList.toggle('visually-hidden');
  authUp.classList.toggle('visually-hidden');
});

logOut.addEventListener('click', () => {
  logOutUser();
});

//оновлюємо напис на кнопці, показуємо фото
const updateHeaderUser = userName => {
  headerUserName.textContent = userName;
  mobMenuUsername.textContent = userName;
  headerUserLogo.classList.remove('visually-hidden');
};

const mobileMenuButton = document.querySelector('.nav-mobile-menu');
const burgerIcon = document.querySelector('.burger');
const closeIcon = document.querySelector('.close-burger');
closeIcon.classList.add('visually-hidden');

// Відслідковуємо відкриття мобільного меню
let isMobileMenuOpen = false;

// Обробка кліку на бургер
function toggleMobileMenu() {
  isMobileMenuOpen = !isMobileMenuOpen;
  //Змінюємо іконку та відкриваємо/закриваємо меню
  if (isMobileMenuOpen) {
    closeIcon.classList.remove('visually-hidden');
    burgerIcon.classList.add('visually-hidden');
    document.body.classList.add('modal-open');
    openMobileMenu();
  } else {
    closeIcon.classList.add('visually-hidden');
    burgerIcon.classList.remove('visually-hidden');
    document.body.classList.remove('modal-open');
    closeMobileMenu();
  }
}
mobileMenuButton.addEventListener('click', toggleMobileMenu);

function openMobileMenu() {
  let mobMenu = document.querySelector('.js-mobile-menu');
  mobMenu.classList.remove('visually-hidden');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  let mobMenu = document.querySelector('.js-mobile-menu');
  mobMenu.classList.add('visually-hidden');
  document.body.style.overflow = 'visible';
}

export { updateHeaderUser, getNameForUpdateHeaderUser };
