import {
  registrationUser,
  setUserName,
  loginUser,
  removeAccount,
  getUserName,
  isAuthUser,
} from './auth-firebase';

import { updateHeaderUser } from './header';

const authModal = document.querySelector('.auth-modal');
const authClose = document.querySelector('.auth-close-btn');
const authCallbackForm = document.querySelector('.auth-form');
const authSwitcherSignUp = document.querySelector('.auth-toggler-sign-up');
const authSwitcherSignIn = document.querySelector('.auth-toggler-sign-in');
const authName = document.querySelector('#auth-name');
const authEmail = document.querySelector('#auth-email');
const authPassword = document.querySelector('#auth-password');
const authSignUp = document.querySelector('.auth-sign-up');
const authSignIn = document.querySelector('.auth-sign-in');

function handlerActionAuth() {
  function removeListenersAuthModal() {
    authClose.removeEventListener('click', handlerOnClose);
    document.removeEventListener('click', clickDocumentAuthCallbackForm);
    document.removeEventListener('keydown', keydownDocumentAuthCallbackForm);
    authSwitcherSignUp.removeEventListener('click', clickAuthSwitcherSignUp);
    authSwitcherSignIn.removeEventListener('click', clickAuthSwitcherSignIn);
    authSignIn.removeEventListener('click', clickAuthLogin);
    authSignUp.removeEventListener('click', clickAuthRegistration);
  }

  function handlerOnClose() {
    authModal.classList.add('visually-hidden');
    removeListenersAuthModal();
  }
  authClose.addEventListener('click', handlerOnClose);

  const clickDocumentAuthCallbackForm = evt => {
    if (
      !evt.composedPath().includes(authCallbackForm) &&
      evt.composedPath().includes(authModal)
    ) {
      authModal.classList.add('visually-hidden');
      removeListenersAuthModal();
    }
  };
  document.addEventListener('click', clickDocumentAuthCallbackForm);

  const keydownDocumentAuthCallbackForm = evt => {
    if (evt.key == 'Escape') {
      authModal.classList.add('visually-hidden');
      removeListenersAuthModal();
    }
  };
  document.addEventListener('keydown', keydownDocumentAuthCallbackForm);

  const clickAuthSwitcherSignUp = () => {
    authSwitcherSignIn.classList.remove('.auth-toggler-active');
    authSwitcherSignUp.classList.add('.auth-toggler-active');
    authName.classList.remove('visually-hidden');
    authSignUp.classList.remove('visually-hidden');
    authSignIn.classList.add('visually-hidden');
  };
  authSwitcherSignUp.addEventListener('click', clickAuthSwitcherSignUp);

  const clickAuthSwitcherSignIn = () => {
    authSwitcherSignUp.classList.remove('.auth-toggler-active');
    authSwitcherSignIn.classList.add('.auth-toggler-active');
    authName.classList.add('visually-hidden');
    authSignUp.classList.add('visually-hidden');
    authSignIn.classList.remove('visually-hidden');
  };
  authSwitcherSignIn.addEventListener('click', clickAuthSwitcherSignIn);

  function validateEmail(email) {
    let result =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return result.test(String(email).toLowerCase());
  }
  const login = async (email, password) => {
    loginUser(email, password)
      .then(() => {
        getUserName()
          .then(getUserNameRes => {
            updateHeaderUser(getUserNameRes.data().name);
            authModal.classList.add('visually-hidden');
            removeListenersAuthModal();
          })
          .catch(getUserNameError => {
            alert(`Get user name error: ${getUserNameError.code}`);
          });
      })
      .catch(signInAppError => {
        alert(`Authorization error: ${signInAppError.code}`);
      });
  };

  const clickAuthLogin = () => {
    const email = authEmail.value.trim();
    const password = authPassword.value.trim();
    if (validateEmail(email)) {
      if (password.length >= 5) {
        login(email, password);
      } else {
        alert('The password must be at least 5 characters long!');
      }
    } else {
      alert('Wrong email!');
    }
  };
  authSignIn.addEventListener('click', clickAuthLogin);

  const registration = async (email, password, name) => {
    registrationUser(email, password)
      .then(() => {
        setUserName(name)
          .then(() => {
            updateHeaderUser(name);
            authModal.classList.add('visually-hidden');
            removeListenersAuthModal();
          })
          .catch(setUserNameError => {
            alert(`Create account error: ${setUserNameError.code}`);
            removeAccount()
              .then(() => {})
              .catch(removeAccountError => {
                alert(`Create account error: ${removeAccountError.code}`);
              });
          });
      })
      .catch(createAccountError => {
        alert(`Create account error: ${createAccountError.code}`);
      });
  };
  const clickAuthRegistration = () => {
    const email = authEmail.value.trim();
    const password = authPassword.value.trim();
    const name = authName.value.trim();
    if (validateEmail(email)) {
      if (password.length >= 5) {
        if (name.length > 0) {
          registration(email, password, name);
        }
      } else {
        alert('The password must be at least 5 characters long!');
      }
    } else {
      alert('Wrong email!');
    }
  };
  authSignUp.addEventListener('click', clickAuthRegistration);
}

function initAuthModal() {
  authSwitcherSignUp.classList.remove('.auth-toggler-active');
  authSwitcherSignIn.classList.add('.auth-toggler-active');
  authName.classList.add('visually-hidden');
  authSignUp.classList.add('visually-hidden');
  authSignIn.classList.add('visually-hidden');
}

export { handlerActionAuth, initAuthModal };
