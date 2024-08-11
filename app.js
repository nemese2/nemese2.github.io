const menu = document.querySelector('.bar-toggle')
const menuLinks = document.querySelector('.bar-menu')
const scroll = document.querySelector('.head-image')

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active')
  menuLinks.classList.toggle('active');
})

window.addEventListener('scroll', function(){
  var value = 0 - window.scrollY * 0.8;
  scroll.style.transform = `translateY(${value}px)`;
})
