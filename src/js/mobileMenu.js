import anime from 'animejs';
import { throttle } from 'throttle-debounce';

// ? TOGGLE BUTTON selector
const setupMobileMenu = (idSelector) => {
  const mobileMenu = document.querySelector(`#${idSelector}`);
  const toggleButton = document.querySelector(`[data-controls="${idSelector}"]`);

  let isOpen = false;

  const setIcon = () => {
    const iconOpen = toggleButton.querySelector('[data-icon-type="open"]');
    const iconClose = toggleButton.querySelector('[data-icon-type="close"]');

    if (isOpen) {
      iconOpen.style.display = 'block';
      iconClose.style.display = 'none';
    } else {
      iconClose.style.display = 'block';
      iconOpen.style.display = 'none';
    }
  };

  const duration = 500;
  const setOpen = () => {
    if (isOpen) {
      // hide mobile menu
      anime({
        targets: mobileMenu,
        translateY: ['0px', '-110%'],
        duration,
        complete() {
          isOpen = false;
          mobileMenu.style.visibility = 'hidden';
        },
      });
      // change button icon to bars-3
      setIcon();
    } else {
      // show mobile menu
      anime({
        targets: mobileMenu,
        translateY: ['-110%', '0px'],
        duration,
        begin() {
          isOpen = true;
          mobileMenu.style.visibility = 'visible';
        },
      });
      // change button icon to x-mark
      setIcon();
    }
  };
  const setOpenThrottle = throttle(duration, () => {
    setOpen();
  });
  toggleButton.addEventListener('click', setOpenThrottle);
};

export default setupMobileMenu;
