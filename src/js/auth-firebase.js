import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  deleteUser,
} from 'firebase/auth';
import { getDatabase, ref, set, get, remove } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCSIOIvaBcm09OifpCpfKPAwnfy_t377rM',
  authDomain: 'testfirebase-422a2.firebaseapp.com',
  databaseURL:
    'https://testfirebase-422a2-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'testfirebase-422a2',
  storageBucket: 'testfirebase-422a2.appspot.com',
  messagingSenderId: '589688307018',
  appId: '1:589688307018:web:e010a81c7decb75d56d5b3',
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
// const emailInput = document.getElementById('email');
// const passwordInput = document.getElementById('password');
// const signOutButton = document.getElementById('signOut');
// let isAuth = false;

function loginUser() {
  const email = emailInput.value;
  const password = passwordInput.value;

  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      alert('Вход успешен');
      signOutButton.style.display = 'block';
      //   isAuth = true;
    })
    .catch(error => {
      alert(`Ошибка входа: ${error.message}`);
    });
}

function createAccaunt() {
  const email = emailInput.value;
  const password = passwordInput.value;
  const name = document.getElementById('name').value; // Получаем имя из поля ввода

  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // После успешной регистрации сохраняем имя пользователя в базе данных
      const user = userCredential.user;
      const userRef = ref(db, `users/${user.uid}`);
      set(userRef, { name: name }); // Сохраняем имя пользователя

      alert('Регистрация успешна');
      signOutButton.style.display = 'block';
      //   isAuth = true;
    })
    .catch(error => {
      alert(`Ошибка регистрации: ${error.message}`);
    });
}

function deleteAccount() {
  const user = auth.currentUser;

  if (user) {
    deleteUser(user)
      .then(() => {
        alert('Аккаунт удален');
        signOutButton.style.display = 'none';
        // isAuth = false;
      })
      .catch(error => {
        alert(`Ошибка при удалении аккаунта: ${error.message}`);
      });
  } else {
    alert('Пользователь не вошел в систему');
  }
}

function logOutUser() {
  signOut(auth).then(() => {
    alert('Выход выполнен успешно');
    signOutButton.style.display = 'none';
    // isAuth = false;
  });
}
let userID = '';
onAuthStateChanged(auth, user => {
  if (user) {
    userID = user.uid;
    console.log('Пользователь вошел в систему. ID пользователя:', userID);

    // Вы можете передать userId в другие функции для работы с базой данных
    // Например, для создания подкаталога с именем пользователя и хранения данных.

    // После успешного входа, загружаем имя пользователя из базы данных
    const userRef = ref(db, `users/${userID}`);
    get(userRef).then(snapshot => {
      if (snapshot.exists()) {
        const userData = snapshot.val();
        const userName = userData.name;
        // Отобразите имя пользователя на странице
        // Например, вы можете добавить его в какой-то элемент, например, <h2>
        // document.getElementById(
        //   'user-name'
        // ).textContent = `Привет, ${userName}!`;
      }
    });
  } else {
    console.log('Пользователь вышел из системы.');
  }
});

export {
  db,
  isAuth,
  loginUser,
  logOutUser,
  createAccaunt,
  deleteAccount,
  signOutButton,
  onAuthStateChanged,
};
