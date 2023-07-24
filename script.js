// Sticky Navbar
let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
 
 
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});
 
menu.onclick = () => {
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
}
 
//light / dark mode section

const modeBtn = document
.querySelector("#light-dark-mode-container")
.addEventListener("click", function() {
  const everything = document.querySelectorAll('*')
  const projectTiles = document.querySelectorAll('.project-tile-overlay');
  everything.forEach((item) => {
   item.classList.toggle('dark');
 });

projectTiles.forEach(item)=> {
item.classList.remove('darkk');
  })
});