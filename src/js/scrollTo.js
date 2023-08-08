import anime from 'animejs';

import { config } from './mobileMenu';

const setupScrollTo = (selector, mobileMenuId) => {
  const elements = document.querySelectorAll(selector);

  const mobileMenu = document.querySelector(`#${mobileMenuId}`);
  const toggleButton = document.querySelector(`[data-controls="${mobileMenuId}"]`);

  const scrollElement = window.document.scrollingElement
        || window.document.body || window.document.documentElement;

  const bias = 81;

  elements.forEach((item) => {
    try {
      const target = document.querySelector(item.getAttribute('href'));

      const scroll = () => {
        anime({
          targets: scrollElement,
          scrollTop: target.offsetTop - bias,
          duration: 500,
          easing: 'easeInOutQuad',
        });
        config.animHide(mobileMenu, toggleButton);
      };
      item.addEventListener('click', scroll);
    } catch (error) {
      // console.warn(error);
    }
  });
};

export default setupScrollTo;
