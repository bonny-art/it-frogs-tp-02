import { el } from './refs';

//to save the dark mode use the object "local storage".
//function that stores the value true if the dark mode is activated or false if it's not.
export function storeDarkMode(value) {
  localStorage.setItem('darkmode', value);
}

//function that indicates if the "darkmode" property exists. It loads the page as we had left it.
export function loadDarkMode() {
  const darkmode = localStorage.getItem('darkmode');

  //if the dark mode was never activated
  if (!darkmode) {
    storeDarkMode(false);
    el.toggleIcon.classList.add('fa-sun');
  } else if (darkmode == 'true') {
    //if the dark mode is activated
    el.body.classList.add('darkmode');
    el.toggleIcon.classList.add('fa-moon');
  } else if (darkmode == 'false') {
    //if the dark mode exists but is disabled
    el.toggleIcon.classList.add('fa-sun');
  }
}

loadDarkMode();

el.toggleBtn.addEventListener('click', function () {
  el.body.classList.toggle('darkmode');
  el.toggleIcon.classList.add('animated');

  //save true or false
  storeDarkMode(el.body.classList.contains('darkmode'));

  if (el.body.classList.contains('darkmode')) {
    el.toggleIcon.classList.remove('fa-sun');
    el.toggleIcon.classList.add('fa-moon');
  } else {
    el.toggleIcon.classList.remove('fa-moon');
    el.toggleIcon.classList.add('fa-sun');
  }

  setTimeout(function () {
    el.toggleIcon.classList.remove('animated');
  }, 500);
});
