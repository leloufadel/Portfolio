// const closeBtn = document.querySelector('.closeBtn')
// const job1 = document.querySelector('.job1')
// closeBtn.addEventListener('click', () => {
//     job1.classList.remove('job1');
//     job1.style.display = 'none';
//   });

const header = document.querySelector('header');
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
    header.addEventListener('click', () => {
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
