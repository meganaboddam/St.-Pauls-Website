'use strict'

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