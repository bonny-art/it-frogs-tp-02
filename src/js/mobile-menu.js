import { logOutUser } from './auth-firebase';
import { handlerActionAuth, initAuthModal } from './auth-popup';
import { getNameForUpdateHeaderUser } from './header';

const mobMenu = document.querySelector('.js-mobile-menu');
const btnLogOut = document.querySelector('.button-log-out');
const mobUserName = document.querySelector('.mob-user-signed');
const btnSignUp = document.querySelector('.mob-sign-up');
const mobSignIn = document.querySelector('.mob-sign-in');
const shoppingListLink = document.querySelector('.mob-auth-link');
btnLogOut.addEventListener('click', logOut);

let mobLogOutIcon = document.querySelector('.mob-log-out-icon');

document.addEventListener('DOMContentLoaded', function () {
  let menuItems = document.querySelectorAll('.mob-nav-item');
  switch (el.body.id) {
    case 'index':
      menuItems[0].classList.add('mob-active-page');
      break;
    case 'shopping':
      menuItems[1].classList.add('mob-active-page');
      break;

    default:
      menuItems[0].classList.add('mob-active-page');
  }
});

// console.log(mobLogOutIcon);
getNameForUpdateHeaderUser().then(login => {
  if (login) {
    btnSignUp.classList.add('visually-hidden');
    btnLogOut.classList.remove('visually-hidden');
    mobUserName.classList.remove('visually-hidden');
    shoppingListLink.classList.remove('visually-hidden');
  } else {
    btnLogOut.classList.add('visually-hidden');
    btnSignUp.classList.remove('visually-hidden');
    mobUserName.classList.add('visually-hidden');
    mobSignIn.classList.add('visually-hidden');
    shoppingListLink.classList.add('visually-hidden');
  }
});
getNameForUpdateHeaderUser();
const authModal = document.querySelector('.auth-modal');
btnSignUp.addEventListener('click', () => {
  authModal.classList.remove('visually-hidden');
  mobMenu.style.display = 'none';
  initAuthModal();
  handlerActionAuth();
});

function logOut(evt) {
  logOutUser();
}
