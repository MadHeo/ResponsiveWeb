const toggleBtn = document.querySelector('.navbar_toogleBtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});

// window.onload = function() {
//     const toggleBtn = document.querySelector(".navbar_toogleBtn");
//     const menu = document.querySelector(".navbar__menu");
//     const icons = document.querySelector(".navbar__icons");
    
//     toggleBtn.addEventListener('click', () => {
//         menu.classList.toggle('active');
//         icons.classList.toggle('active');
//     }); 
// }
