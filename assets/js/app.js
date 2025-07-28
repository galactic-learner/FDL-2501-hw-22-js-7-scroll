let navBar = document.querySelector("nav");
let scrollToTop = document.querySelector('.scroll_top');

let currentValue = 0;


window.addEventListener("scroll", function(){

    if (window.scrollY < currentValue) {
        navBar.classList.add("active");
    } else{
        navBar.classList.remove("active");
    }

    currentValue = window.scrollY;

    if (window.scrollY > 300) {
        scrollToTop.classList.add("scroll_active");
    } else {
        scrollToTop.classList.remove("scroll_active");
    }

});