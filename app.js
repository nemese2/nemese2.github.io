const menu = document.querySelector('.bar-toggle')
const menuLinks = document.querySelector('.bar-menu')
const scroll = document.querySelector('.head-image')
const width = document.body.clientWidth

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active')
  menuLinks.classList.toggle('active');
})

window.addEventListener('scroll', function(){
  var value = 0 - (window.scrollY * (300 / width));
  scroll.style.transform = `translateY(${value}px)`;
})