import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  deleteUser,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { doc, setDoc, getDoc } from 'firebase/firestore';
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
import Swal from 'sweetalert2';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const registrationUser = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const setUserName = async userName => {
  const docRef = doc(db, 'users', auth.currentUser.uid);
  return setDoc(docRef, {
    name: userName,
  });
};

const loginUser = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const isAuthUser = async () => {
  await auth._initializationPromise;
  return auth.currentUser === null ? false : true;
};

const removeAccount = async () => {
  const user = auth.currentUser;
  return deleteUser(user);
};

const getUserName = async () => {
  return getDoc(doc(db, 'users', auth.currentUser.uid));
};

const getUserEmail = () => {
  return auth.currentUser.email;
};

const returnAuth = () => {
  return auth;
};

function logOutUser() {
  signOut(auth).then(() => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Good luck, see later!',
      showConfirmButton: false,
      timer: 2000,
    });
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 2000);
  });
}
export {
  registrationUser,
  setUserName,
  loginUser,
  isAuthUser,
  removeAccount,
  getUserName,
  getUserEmail,
  returnAuth,
  logOutUser,
};
