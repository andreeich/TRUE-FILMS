import anime from 'animejs';
import { throttle } from 'throttle-debounce';
import bph from './bph';

const setupDropdown = (selector) => {
  let elements = document.querySelectorAll(selector);

  // ? breakpoint variants function + throttle for resize event
  const dropdownBV = throttle(500, () => {
    // ! remove all event listeners
    elements.forEach((element) => {
      element.replaceWith(element.cloneNode(true));
    });
    elements = document.querySelectorAll(selector);

    elements.forEach((element) => {
      const nav = element.querySelector('ul');
      let isOpen = false;
      let setOpen = null;
      const duration = 400;

      // * set a function based on current breakpoint
      if (bph.isMatching('sm')) {
        setOpen = () => {
          if (isOpen) {
            // hide
            anime({
              targets: nav,
              opacity: [1, 0],
              scale: [1, 0],
              duration,
              complete() {
                isOpen = false;
                nav.style.setProperty('display', 'none');
              },
            });
          } else {
            // show
            anime({
              targets: nav,
              opacity: [0, 1],
              scale: [0, 1],
              duration,
              begin() {
                isOpen = true;
                nav.style.setProperty('display', 'block');
              },
            });
          }
        };
      } else {
        setOpen = () => {
          if (isOpen) {
            // hide
            anime({
              targets: nav,
              opacity: [1, 0],
              height: ['100%', '0px'],
              translateY: -50,
              duration,
              complete() {
                isOpen = false;
                nav.style.setProperty('display', 'none');
              },
            });
          } else {
            // show
            anime({
              targets: nav,
              opacity: [0, 1],
              height: ['0px', '100%'],
              translateY: 0,
              duration,
              begin() {
                isOpen = true;
                nav.style.setProperty('display', 'block');
              },
            });
          }
        };
      }

      // * add a new event listener
      element.addEventListener('click', setOpen);
    });
  });

  // initial call
  dropdownBV();
  window.addEventListener('resize', () => {
    dropdownBV();
  });
};

export default setupDropdown;
