const menu = document.querySelector('.bar-toggle')
const menuLinks = document.querySelector('.bar-menu')
const scroll = document.querySelector('.head-image')

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active')
  menuLinks.classList.toggle('active');
})

setInterval(function(){
  window.width = document.body.clientWidth;
}, 10)

window.addEventListener('scroll', function(){
  var value = 0 - ((window.scrollY * (window.width * 0.02 + 40)) * 0.01);
  scroll.style.transform = `translateY(${value}px)`;
})