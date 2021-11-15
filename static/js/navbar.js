const navMenu = document.querySelector('#mobile-menu');
const navMenuLinks = document.querySelector('.navbar_menu');


const showMobileMenu = () => {
    navMenu.classList.toggle('is-active');
    navMenuLinks.classList.toggle('active');
}

navMenu.addEventListener('click', showMobileMenu);


var body = document.getElementsByTagName("body")[0];
var navigation = document.getElementsByClassName("navbar_container");
