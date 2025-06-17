// Basic animation illusion
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.hero').style.opacity = '0';
  setTimeout(() => {
    document.querySelector('.hero').style.transition = 'opacity 2s';
    document.querySelector('.hero').style.opacity = '1';
  }, 500);
});

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});