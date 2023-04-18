const header = document.querySelector('header');
const humberger = document.querySelector('.hamberger');
const body = document.querySelector('body');
const MOBILE_WIDTH = 768;
function disableScroll() {
  body.style.overflow = 'hidden';
 
}
function enableScroll() {
  body.style.overflow = 'auto';
  
}
function setMobileClass() {
  if (window.innerWidth < MOBILE_WIDTH) {
    humberger.addEventListener('click', () => {
      header.classList.toggle('active');
      
      if (header.classList.contains('active')) {
        disableScroll();
      } else {
        enableScroll();
      }
    });
  }
}
setMobileClass();
window.addEventListener('resize', setMobileClass);
