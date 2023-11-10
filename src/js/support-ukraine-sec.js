const mainSupportScroll = document.querySelector('.main-support-scroll');
const mainSupportList = document.querySelector('.main-support-list');

mainSupportScroll.addEventListener('click', () => {
  let list = [...mainSupportList.children].slice(0, 1);
  mainSupportList.firstChild.remove();
  mainSupportList.appendChild(list[0]);
});
