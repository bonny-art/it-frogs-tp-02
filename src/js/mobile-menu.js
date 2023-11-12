import { doc } from 'firebase/firestore';
import { logOutUser,} from './auth-firebase';
const btnOpenMenu = document.getElementById("open-mobile-menu");
const mobMenu = document.querySelector(".js-mobile-menu");
const btnHome = document.querySelector('.button-home');
const btnShoppingList = document.querySelector('.button-shopping-list');
const btnLogOut = document.querySelector('.button-log-out');
// console.log(btnOpenMenu);
// console.log(mobMenu);
// console.log(btnHome);

btnOpenMenu.addEventListener('click', openMobMenu);
btnHome.addEventListener('click', goHome);
btnShoppingList.addEventListener('click', openShoppingList);
btnLogOut.addEventListener('click', logOut);

function openMobMenu(evt){
mobMenu.style.display = 'block'
}

function goHome(evt){
    window.location.href = '/index.html'
    mobMenu.style.display = 'none'
}

function openShoppingList(evt){
    window.location.href = 'shopping-list.html'
}

function logOut(evt){
    logOutUser()
window.location.href = '/index.html'
}

