// popup-menu mobile version
const headList = document.querySelector('.hide_pop');
const openMenu = document.querySelector('.open_pop');
const closeMenu = document.querySelectorAll('.close_pop');
const closeBtn = document.querySelector('.close-menu')




openMenu.addEventListener('click', show);
// closeMenu.addEventListener('click', close);
closeBtn.addEventListener('click', close)

/**  adding css style to the elements
 *   for opening
 */
function show() {
  headList.style.display = 'flex';
  headList.style.top = '0';
}
/** adding css style to the elements
 *  for closing
 */
function close() {
  closeBtn.style.top = '-100%';
}