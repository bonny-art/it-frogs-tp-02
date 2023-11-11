import { handlerActionAuth, initAuthModal } from './auth-popup';
import {
  isAuthUser,
  getUserName,
  checkAuthenticationStatus,
  deleteAccount,
  logOutUser,
} from './auth-firebase';

const headerUser = document.querySelector('.menu-auth');
const authModal = document.querySelector('.auth-modal');
const headerUserName = document.querySelector('.menu-username');
const headerUserLogo = document.querySelector('.menu-auth-logo');

//отримуємо ім'я користувача
const getNameForUpdateHeaderUser = async () => {
  const login = await isAuthUser();
  if (login) {
    getUserName().then(getUserNameRes => {
      updateHeaderUser(getUserNameRes.data().name);
    });
  }
};
const isAuthenticated = checkAuthenticationStatus();

//ініціалізуємо початковий стан кнопки юзера
function initOnStartUp() {
  headerUserName.textContent = 'Sign In';
  headerUserLogo.classList.add('visually-hidden');
  getNameForUpdateHeaderUser();
}
initOnStartUp();
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
