const test = document.querySelector(
  '.test-input-icon use[href="/images/header/header-defs.svg#icon-mail-1"]'
);

console.log('test', test);

const aaa = test.parentNode;

console.log('parentNode', aaa);

aaa.classList.add('is-hidden');
