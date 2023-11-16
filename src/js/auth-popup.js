import {
  registrationUser,
  setUserName,
  loginUser,
  removeAccount,
  getUserName,
} from './auth-firebase';
import { authErrors, getErrorMessage } from './auth-errors';
import { updateHeaderUser } from './header';
import Swal from 'sweetalert2';

const authModal = document.querySelector('.auth-modal');
const authClose = document.querySelector('.auth-close-btn');
const authSwitcherSignUp = document.querySelector('.auth-toggler-sign-up');
const authSwitcherSignIn = document.querySelector('.auth-toggler-sign-in');
const authName = document.querySelector('#auth-name');
const authEmail = document.querySelector('#auth-email');
const authPassword = document.querySelector('#auth-password');
const authSignUp = document.querySelector('.auth-sign-up');
const authSignIn = document.querySelector('.auth-sign-in');

function handlerActionAuth() {
  //прибирає слухачів після закриття модального вікна
  function removeListenersAuthModal() {
    authClose.removeEventListener('click', handlerOnClose);
    document.removeEventListener('keydown', keydownDocumentAuthForm);
    authSwitcherSignUp.removeEventListener('click', clickAuthSwitcherSignUp);
    authSwitcherSignIn.removeEventListener('click', clickAuthSwitcherSignIn);
    authSignIn.removeEventListener('click', clickAuthLogin);
    authSignUp.removeEventListener('click', clickAuthRegistration);
  }
  //ховає модальне вікно
  function handlerOnClose() {
    document.body.classList.remove('modal-open');
    authModal.classList.add('visually-hidden');
    removeListenersAuthModal();
  }
  authClose.addEventListener('click', handlerOnClose);

  //закриваємо модалку кнопкою
  const keydownDocumentAuthForm = evt => {
    if (evt.key === 'Enter') {
      evt.preventDefault();
      const activeButton = document.querySelector('.auth-toggler-active');
      if (activeButton === authSwitcherSignIn) {
        clickAuthLogin();
      } else if (activeButton === authSwitcherSignUp) {
        clickAuthRegistration();
      }
    } else if (evt.key === 'Escape') {
      document.body.classList.remove('modal-open');
      authModal.classList.add('visually-hidden');
      removeListenersAuthModal();
    }
  };
  document.addEventListener('keydown', keydownDocumentAuthForm);

  //змінюємо форму по кліку на тоглері
  const clickAuthSwitcherSignUp = () => {
    authSwitcherSignIn.classList.remove('auth-toggler-active');
    authSwitcherSignUp.classList.add('auth-toggler-active');
    authName.classList.remove('visually-hidden');
    authSignUp.classList.remove('visually-hidden');
    authSignIn.classList.add('visually-hidden');
  };
  authSwitcherSignUp.addEventListener('click', clickAuthSwitcherSignUp);

  const clickAuthSwitcherSignIn = () => {
    authSwitcherSignUp.classList.remove('auth-toggler-active');
    authSwitcherSignIn.classList.add('auth-toggler-active');
    authName.classList.add('visually-hidden');
    authSignUp.classList.add('visually-hidden');
    authSignIn.classList.remove('visually-hidden');
  };
  authSwitcherSignIn.addEventListener('click', clickAuthSwitcherSignIn);

  //перевіряємо допустимі знаки у пошті
  function validateEmail(email) {
    let result =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return result.test(String(email).toLowerCase());
  }

  //обробляємо логін
  const login = async (email, password) => {
    loginUser(email, password)
      .then(() => {
        getUserName()
          .then(getUserNameRes => {
            const message = `${getUserNameRes.data().name}!`;
            Swal.fire({
              title: message,
              text: 'Welcome back!',
              icon: 'success',
              confirmButtonText: 'Ok',
            });
            updateHeaderUser(getUserNameRes.data().name);
            authModal.classList.add('visually-hidden');
            setTimeout(() => {
              removeListenersAuthModal();
              location.reload();
            }, 2000);
          })
          .catch(getUserNameError => {
            const message = `${getUserNameError.code}`;
            const errorMessageText = getErrorMessage(message);
            Swal.fire({
              title: 'Get username error!',
              text: errorMessageText,
              icon: 'error',
              confirmButtonText: 'Ok',
            });
          });
      })
      .catch(signInAppError => {
        const message = `${signInAppError.code}`;
        const errorMessageText = getErrorMessage(message);
        Swal.fire({
          title: 'Authorization error!',
          text: errorMessageText,
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      });
  };
  //логінімся
  const clickAuthLogin = () => {
    const email = authEmail.value.trim();
    const password = authPassword.value.trim();
    if (validateEmail(email)) {
      if (password.length >= 5) {
        login(email, password);
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'The password must be at least 5 characters long!',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      }
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Wrong email or not valid!',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }
  };
  authSignIn.addEventListener('click', clickAuthLogin);

  //обробка реєстрації
  const registration = async (email, password, name) => {
    registrationUser(email, password)
      .then(() => {
        setUserName(name)
          .then(() => {
            const message = `${name},`;
            Swal.fire({
              title: message,
              text: 'Your account has been created! Welcome!',
              icon: 'success',
              confirmButtonText: 'Ok',
            });
            updateHeaderUser(name);
            authModal.classList.add('visually-hidden');
            setTimeout(() => {
              removeListenersAuthModal();
              location.reload();
            }, 2000);
          })
          .catch(setUserNameError => {
            const message = `${createAccountError.code}`;
            const errorMessageText = getErrorMessage(message);
            Swal.fire({
              title: 'Create account error! ',
              text: errorMessageText,
              icon: 'error',
              confirmButtonText: 'Ok',
            });
            removeAccount()
              .then(() => {})
              .catch(removeAccountError => {
                const message = `${removeAccountError.code}`;
                const errorMessageText = getErrorMessage(message);
                Swal.fire({
                  title: 'Create account error! ',
                  text: errorMessageText,
                  icon: 'error',
                  confirmButtonText: 'Ok',
                });
              });
          });
      })
      .catch(createAccountError => {
        const message = `${createAccountError.code}`;
        const errorMessageText = getErrorMessage(message);
        Swal.fire({
          title: 'Create account error!',
          text: errorMessageText,
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      });
  };
  //реєструємось
  const clickAuthRegistration = () => {
    const email = authEmail.value.trim();
    const password = authPassword.value.trim();
    const name = authName.value.trim();
    const displayName = name.length > 0 ? name : 'Anonim';
    if (validateEmail(email)) {
      if (password.length >= 5) {
        registration(email, password, displayName);
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'The password must be at least 5 characters long!',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      }
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Wrong email or not valid!',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }
  };
  authSignUp.addEventListener('click', clickAuthRegistration);
}
//ініціюємо початковий стан модалки
function initAuthModal() {
  passwordIconLocked.classList.remove('visually-hidden');
  passwordIconOpened.classList.add('visually-hidden');
  authSwitcherSignUp.classList.remove('.auth-toggler-active');
  authSwitcherSignIn.classList.add('.auth-toggler-active');
  authName.classList.add('visually-hidden');
  authSignUp.classList.add('visually-hidden');
  authSignIn.classList.remove('visually-hidden');
}

let passwordInput = document.getElementById('auth-password');
let passwordIconLocked = document.querySelector('.locked-pass-icon');
let passwordIconOpened = document.querySelector('.opened-pass-icon');
let isPasswordVisible = false;

// Змінюємо відображення паролю
function togglePasswordVisibility() {
  isPasswordVisible = !isPasswordVisible;

  if (isPasswordVisible) {
    passwordInput.type = 'text';
    passwordIconLocked.classList.add('visually-hidden');
    passwordIconOpened.classList.remove('visually-hidden');
  } else {
    passwordInput.type = 'password';
    passwordIconLocked.classList.remove('visually-hidden');
    passwordIconOpened.classList.add('visually-hidden');
  }
}

passwordIconLocked.addEventListener('click', togglePasswordVisibility);
passwordIconOpened.addEventListener('click', togglePasswordVisibility);

export { handlerActionAuth, initAuthModal };
