import * as customFunctions from './modules/functions.js';

document.addEventListener('DOMContentLoaded', () => {
  customFunctions.isWebp();

  const body = document.querySelector('body');
  const overlay = document.querySelector('.overlay');
  const burger = document.querySelector('.burger');
  const menuLinks = document.querySelectorAll('.menu__link');
  const modal = document.querySelector('.modal');

  function toggleOverlay() {
    body.classList.toggle('lock');
    overlay.classList.toggle('active');
  }

  const closeBurgerMenu = () => {
    burger.classList.remove('active');
    toggleOverlay();
  };

  // #region Burger menu

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    toggleOverlay();

    if (burger.classList.contains('active')) {
      menuLinks.forEach(link => {
        link.addEventListener('click', closeBurgerMenu);
      });

      return;
    }

    menuLinks.forEach(link => {
      link.removeEventListener('click', closeBurgerMenu);
    });
  });

  overlay.addEventListener('click', () => {
    burger.classList.remove('active');
    modal.classList.remove('active');
    overlay.style.cssText = '';
    toggleOverlay();

    menuLinks.forEach(link => {
      link.removeEventListener('click', closeBurgerMenu);
    });
  });

  // #endregion

  // #region Modal

  const openModalButton = document.getElementById('open-modal');
  const closeModalButton = document.getElementById('close-modal');
  const modalLinks = modal.querySelectorAll('a');

  function openModal() {
    modal.classList.add('active');
    overlay.style.cssText = 'z-index: 30';
    toggleOverlay();
  }

  function closeModal() {
    modal.classList.remove('active');
    overlay.style.cssText = '';
    toggleOverlay();
  }

  openModalButton.addEventListener('click', () => {
    openModal();
  });

  closeModalButton.addEventListener('click', () => {
    closeModal();
  });

  modalLinks.forEach(link => {
    link.addEventListener('click', e => {
      closeModal();
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
