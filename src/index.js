const menu = document.querySelector('.menu');
const burger_btn = document.querySelector('.hamburger');
const close_btn = document.querySelector('.menu__close');

burger_btn.addEventListener('click', function() {
    menu.classList.toggle('menu_active')
})

close_btn.addEventListener('click', function() {
    menu.classList.toggle('menu_active')
})