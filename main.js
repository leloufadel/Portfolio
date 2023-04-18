// const hamburgerButton = document.getElementById('hamburger-button');
// const mobileMenu = document.querySelector('.menu');

// hamburgerButton.addEventListener('click', () => {
//   mobileMenu.classList.toggle('show');
// });
// const menuItems = mobileMenu.querySelectorAll('a');
// menuItems.forEach(item => {
//   item.addEventListener('click', () => {
//     mobileMenu.classList.remove('show');
//   });
// });

// const humberger = document.querySelector(".humberger");

// humberger.addEventListener("click", () => {

// const navigations = document.querySelector(".navigations");

// navigations.style.display = 'flex';

//  });
// const hamburger = document.querySelector('.hamberger');
// const mynav = document.querySelector(".nav-menu");
const header = document.querySelector('header');

// hamburger.addEventListener("click", () => {
//     header.classList.toggle("active");
//     // mynav.classList.toggle("active");
// } );

// const header = document.querySelector('.header');

const body = document.querySelector('body');

// Set the screen width threshold
const MOBILE_WIDTH = 768;

function disableScroll() {
  body.style.overflow = 'hidden';
}

function enableScroll() {
  body.style.overflow = 'auto';
}

// Function to add or remove the "mobile" class based on the screen width
function setMobileClass() {
  if (window.innerWidth < MOBILE_WIDTH) {
    header.addEventListener('click', () => {
      header.classList.toggle('active');
      // Toggle scroll
      if (header.classList.contains('active')) {
        disableScroll();
      } else {
        enableScroll();
      }
    });
  }
}
// Call the function on page load
setMobileClass();

// Call the function on window resize
window.addEventListener('resize', setMobileClass);
