const hamburger = document.querySelector(".mobile-navbar-btn");
const header = document.querySelector(".header");
const toggleNavbar = () => {
    header.classList.toggle('active');
};
hamburger.addEventListener('click',() => toggleNavbar());