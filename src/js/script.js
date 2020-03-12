import '../scss/main.scss'

window.addEventListener('DOMContentLoaded', function () {
  'use strict';
  const menu = document.querySelector('.menu');
  const menuList = document.querySelector('.menu__list');
  const hamburger = document.querySelector('.hamburger');

  menu.addEventListener('click', (event) => {
    if (event.target) {
      menuList.classList.toggle('menu__list--active');

      if (event.target.matches('.hamburger--active')) {
        menuList.classList.add('menu__list--fade');
        const fading = () => menuList.classList.remove('menu__list--fade');
        setTimeout(fading, 500);
      }
      hamburger.classList.toggle('hamburger--active');
    }
  })
});