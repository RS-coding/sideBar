const menuHamburguer = document.querySelector('.sidebar-toggle');

const closeMenu = document.querySelector('.close-btn');

const sideBar = document.querySelector('.sidebar');


menuHamburguer.addEventListener('click', function(){
    sideBar.classList.toggle('open')
})

closeMenu.addEventListener('click', function(){
    sideBar.classList.remove('open')
})