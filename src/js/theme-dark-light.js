const body = document.querySelector('body');
const btn = document.querySelector('.btn');
const icon = document.querySelector('.btn__icon');

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
    icon.classList.add('fa-sun');
  } else if (darkmode == 'true') {
    //if the dark mode is activated
    body.classList.add('darkmode');
    icon.classList.add('fa-moon');
  } else if (darkmode == 'false') {
    //if the dark mode exists but is disabled
    icon.classList.add('fa-sun');
  }
}

loadDarkMode();

btn.addEventListener('click', function () {
  body.classList.toggle('darkmode');
  icon.classList.add('animated');

  //save true or false
  storeDarkMode(body.classList.contains('darkmode'));

  if (body.classList.contains('darkmode')) {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  } else {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }

  setTimeout(function () {
    icon.classList.remove('animated');
  }, 500);
});
