import anime from 'animejs';
import { throttle } from 'throttle-debounce';

// ? TOGGLE BUTTON selector
const setupMobileMenu = (idSelector) => {
  const html = document.querySelector('html');
  const body = document.querySelector('body');
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

          html.classList.remove('max-sm:h-screen');
          html.classList.remove('max-sm:overflow-hidden');
          body.classList.remove('max-sm:h-screen');
          body.classList.remove('max-sm:overflow-hidden');
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

          html.classList.add('max-sm:h-screen');
          html.classList.add('max-sm:overflow-hidden');
          body.classList.add('max-sm:h-screen');
          body.classList.add('max-sm:overflow-hidden');
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
