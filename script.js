const hamburguer = document.querySelector('.hamburger');
const navList = document.querySelector('.nav__list');
const navLinks = document.querySelectorAll('.nav__list-item--link');

hamburguer.onclick = () => {
  navList.classList.toggle('active');
  hamburguer.classList.toggle('active');
};

const removeActive = (links) => {
  links.forEach((link) => {
    link.classList.remove('active');
  });
};

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    removeActive(navLinks);
    link.classList.add('active');
    navList.classList.remove('active');
    hamburguer.classList.remove('active');

  });
});

