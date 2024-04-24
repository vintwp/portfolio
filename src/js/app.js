import * as customFunctions from './modules/functions.js';

document.addEventListener('DOMContentLoaded', () => {
  customFunctions.isWebp();

  const body = document.querySelector('body');

  // #region Burger menu

  const burger = document.querySelector('.burger');

  burger.addEventListener('click', e => {
    burger.classList.toggle('active');
    body.classList.toggle('lock');
  });

  // #endregion

  // #region Modal
  const modal = document.querySelector('.modal');
  const openModalButton = document.getElementById('open-modal');
  const closeModalButton = document.getElementById('close-modal');
  const modalLinks = modal.querySelectorAll('a');

  openModalButton.addEventListener('click', () => {
    modal.classList.add('opened');
  });

  closeModalButton.addEventListener('click', () => {
    modal.classList.remove('opened');
  });

  modal.addEventListener('click', (e) => {
    if (!e.target.closest('.modal__content')) {
      modal.classList.remove('opened');
    }
  });

  modalLinks.forEach(link => {
    link.addEventListener('click', e => {
      modal.classList.remove('opened');
    });
  });

  // #endregion

  // #region Swiper
  // eslint-disable-next-line no-undef, no-unused-vars
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  });

  // #endregion
});
