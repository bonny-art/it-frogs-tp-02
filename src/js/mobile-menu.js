import { doc } from 'firebase/firestore';
import { logOutUser } from './auth-firebase';
import { handlerActionAuth, initAuthModal } from './auth-popup';
import { getNameForUpdateHeaderUser } from './header';
// import svgSprite from '/images/mobile-menu/mobile-menu-defs.svg';

const mobMenu = document.querySelector('.js-mobile-menu');
const btnHome = document.querySelector('.button-home');
const btnShoppingList = document.querySelector('.button-shopping-list');
const btnLogOut = document.querySelector('.button-log-out');
const mobUserName = document.querySelector('.mob-user-signed');
const btnSignUp = document.querySelector('.mob-sign-up');
const mobSignIn = document.querySelector('.mob-sign-in');
// console.log(btnOpenMenu);
// console.log(mobMenu);
// console.log(btnHome);
btnHome.addEventListener('click', goHome);
btnShoppingList.addEventListener('click', openShoppingList);
btnLogOut.addEventListener('click', logOut);
// btnSignUp.addEventListener('click', handlerBtnSingUp);

// console.log(getNameForUpdateHeaderUser());
let mobLogOutIcon = document.querySelector('.mob-log-out-icon')
console.log(mobLogOutIcon);
getNameForUpdateHeaderUser().then(login => {
  if (login) {
    btnSignUp.classList.add('visually-hidden');
    btnHome.classList.remove('visually-hidden');
    btnShoppingList.classList.remove('visually-hidden');
    btnLogOut.classList.remove('visually-hidden');
    mobUserName.classList.remove('visually-hidden');
    // mobLogOutIcon.setAttribute(
    //   'href',
    //   `${svgSprite}#icon-arrow-narrow-right-1`
    // );
  } else {
    btnHome.classList.add('visually-hidden');
    btnShoppingList.classList.add('visually-hidden');
    btnLogOut.classList.add('visually-hidden');
    btnSignUp.classList.remove('visually-hidden');
    mobUserName.classList.add('visually-hidden');
    mobSignIn.classList.add('visually-hidden');
   
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

function goHome(evt) {
  window.location.href = '/index.html';
  mobMenu.style.display = 'none';
}

function openShoppingList(evt) {
  window.location.href = 'shopping-list.html';
}

function logOut(evt) {
  logOutUser();
  // window.location.href = '/index.html';
}

// const authModal = document.querySelector('.auth-modal');
// переменнаяКнопки.addEventListener('click', () => {
//   authModal.classList.remove('visually-hidden');
//   initAuthModal();
//   handlerActionAuth();
// });
