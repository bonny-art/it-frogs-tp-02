import { handlerActionAuth, initAuthModal } from './auth-popup';
import { isAuthUser, getUserName, logoutUser } from './auth-firebase';

const headerUser = document.querySelector('.menu-auth');
const authModal = document.querySelector('.auth-modal');
const headerUserName = document.querySelector('.menu-username');
const headerUserLogo = document.querySelector('.menu-auth-logo');

const getNameForUpdateHeaderUser = async () => {
  const login = await isAuthUser();
  if (login) {
    getUserName().then(getUserNameRes => {
      updateHeaderUser(getUserNameRes.data().name);
    });
  }
};

(() => {
  headerUserName.textContent = 'Sign In';
  headerUserLogo.classList.add('visually-hidden');
  getNameForUpdateHeaderUser();
})();

headerUser.addEventListener('click', () => {
  authModal.classList.remove('visually-hidden');
  initAuthModal();
  handlerActionAuth();
});

const updateHeaderUser = userName => {
  headerUserName.textContent = userName;
  headerUserLogo.classList.remove('visually-hidden');
};

export { updateHeaderUser };
