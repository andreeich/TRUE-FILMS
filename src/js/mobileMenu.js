import anime from 'animejs';
import { throttle } from 'throttle-debounce';

export const config = {
  isOpen: false,
  duration: 500,
  setIcon: (toggleButton) => {
    const iconOpen = toggleButton.querySelector('[data-icon-type="open"]');
    const iconClose = toggleButton.querySelector('[data-icon-type="close"]');

    if (config.isOpen) {
      iconOpen.style.display = 'block';
      iconClose.style.display = 'none';
    } else {
      iconClose.style.display = 'block';
      iconOpen.style.display = 'none';
    }
  },
  animHide: (mobileMenu, toggleButton) => {
    anime({
      targets: mobileMenu,
      translateY: ['0px', '-110%'],
      duration: config.duration,
      complete() {
        config.isOpen = false;
        // eslint-disable-next-line no-param-reassign
        mobileMenu.style.visibility = 'hidden';

        // document.querySelector('html').classList.remove('max-sm:h-screen');
        document.querySelector('html').classList.remove('max-sm:overflow-hidden');
        // document.querySelector('body').classList.remove('max-sm:h-screen');
        document.querySelector('body').classList.remove('max-sm:overflow-hidden');
      },
    });
    // change button icon to bars-3
    config.setIcon(toggleButton);
  },
  animShow: (mobileMenu, toggleButton) => {
    anime({
      targets: mobileMenu,
      translateY: ['-110%', '0px'],
      duration: config.duration,
      begin() {
        config.isOpen = true;
        // eslint-disable-next-line no-param-reassign
        mobileMenu.style.visibility = 'visible';

        // document.querySelector('html').classList.add('max-sm:h-screen');
        document.querySelector('html').classList.add('max-sm:overflow-hidden');
        // document.querySelector('body').classList.add('max-sm:h-screen');
        document.querySelector('body').classList.add('max-sm:overflow-hidden');
      },
    });
    // change button icon to x-mark
    config.setIcon(toggleButton);
  },
};

// ? TOGGLE BUTTON selector
const setupMobileMenu = (idSelector) => {
  const mobileMenu = document.querySelector(`#${idSelector}`);
  const toggleButton = document.querySelector(`[data-controls="${idSelector}"]`);

  const setOpen = () => {
    if (config.isOpen) {
      // hide mobile menu
      config.animHide(mobileMenu, toggleButton);
    } else {
      // show mobile menu
      config.animShow(mobileMenu, toggleButton);
    }
  };
  const setOpenThrottle = throttle(config.duration, () => {
    setOpen();
  });
  toggleButton.addEventListener('click', setOpenThrottle);
};

export default setupMobileMenu;
