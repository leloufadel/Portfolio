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
const hamburger = document.querySelector(".hamberger");
const mynav = document.querySelector(".nav-menu");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mynav.classList.toggle("active");
} );
