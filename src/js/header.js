import { handlerActionAuth, initAuthModal } from './auth-popup';
import {
  isAuthUser,
  getUserName,
  checkAuthenticationStatus,
  deleteAccount,
  logOutUser,
} from './auth-firebase';
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
  // headerUserName.textContent = 'Sign up';
  // headerUserLogo.classList.add('visually-hidden');
  getNameForUpdateHeaderUser().then(login => {
    console.log(login);
    let menuAuthIcon = document.querySelector('.menu-auth-icon use');
    let authLink = document.querySelector('.auth-link');
    if (login) {
      menuAuthIcon.setAttribute(
        'href',
        '/images/header/header-defs.svg#icon-fi-ss-caret-down-1'
      );
      authLink.classList.remove('visually-hidden');
    } else {
      menuAuthIcon.setAttribute(
        'href',
        '/images/header/header-defs.svg#icon-arrow-narrow-right-1'
      );
      authLink.classList.add('visually-hidden');
    }
  });
});
const headerUser = document.querySelector('.menu-auth');
const authModal = document.querySelector('.auth-modal');
const headerUserName = document.querySelector('.menu-username');
const headerUserLogo = document.querySelector('.menu-auth-logo');

//отримуємо ім'я користувача
async function getNameForUpdateHeaderUser() {
  const login = await isAuthUser();
  console.log(login);
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

//оновлюємо напис на кнопці, показуємо фото
const updateHeaderUser = userName => {
  headerUserName.textContent = userName;
  headerUserLogo.classList.remove('visually-hidden');
};
export { updateHeaderUser };
