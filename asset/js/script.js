// popup-menu mobile version
const headList = document.querySelector('.nav-links');
const openMenu = document.querySelector('.openPop');
const closeBtn = document.querySelector('.closeMenu');

openMenu.addEventListener('click', () => {
  headList.classList.add('show');
});
closeBtn.addEventListener('click', () => {
  headList.classList.remove('show');
});
