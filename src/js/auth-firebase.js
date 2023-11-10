import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  deleteUser,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { doc, setDoc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
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

const logoutUser = () => {
  signOut(auth);
};

const removeAccount = async () => {
  const user = auth.currentUser;
  return deleteUser(user);
};

const removeAccountInfo = async () => {
  const user = auth.currentUser;
  return deleteDoc(doc(db, 'users', user.uid));
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
function checkAuthenticationStatus() {
  onAuthStateChanged(auth, user => {
    if (user) {
      // User is signed in
      console.log('User is signed in');
      return true;
    } else {
      // User is signed out
      console.log('User is signed out');
      return false;
    }
  });
}
export {
  checkAuthenticationStatus,
  registrationUser,
  setUserName,
  loginUser,
  isAuthUser,
  logoutUser,
  removeAccount,
  removeAccountInfo,
  getUserName,
  getUserEmail,
  returnAuth,
};
