// Swiper 7.4.1
// import './vendor/swiper';

function initialMap() {
  const mapContainer = document.querySelector('.contacts__map-container');
  mapContainer.classList.remove('contacts__map-container--nojs');
}

function menuOpen() {
  const header = document.querySelector('.header');
  const navMenu = document.querySelector('.main-nav');
  const navToggle = document.querySelector('.menu-toggle');

  header.classList.remove('header--nojs');
  navMenu.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function () {
    if (header.classList.contains('header--menu-opened')) {
      header.classList.remove('header--menu-opened');
      navMenu.classList.remove('main-nav--menu-opened');
      navToggle.classList.remove('menu-toggle--opened');
    } else {
      header.classList.add('header--menu-opened');
      navMenu.classList.add('main-nav--menu-opened');
      navToggle.classList.add('menu-toggle--opened');
    }
  });
}

function addScrollSmooth() {

  const anchors = document.querySelectorAll('a[href*="#"]');

  anchors.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      const blockID = item.getAttribute('href');
      document.querySelector('' + blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  });

}

export {initialMap, menuOpen, addScrollSmooth};
