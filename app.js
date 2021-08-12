'use strict'

/* mobile nav bar creation */
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('nav_bar__menu');

// displays mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);




/*
const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function() {
    document.body.classList.toggle('alternate-font')
    
    var className = document.body.className;
    if(className == "original-font") {
        this.textContent = "larger, Times font";
    }
    else {
        this.textContent = "smaller font";
    }

}
);
*/