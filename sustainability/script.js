const header = document.querySelector('.site-header');
const navToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const menuIcon = navToggle.querySelector('i');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuIcon.classList.toggle('fa-bars', !isOpen);
  menuIcon.classList.toggle('fa-xmark', isOpen);
  navToggle.setAttribute('aria-expanded', isOpen);
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

