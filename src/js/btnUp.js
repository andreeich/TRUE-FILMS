import anime from 'animejs';

const setupBtnUp = (selector) => {
  const element = document.querySelector(selector);

  const scrollElement = window.document.scrollingElement
        || window.document.body || window.document.documentElement;

  const scroll = () => {
    anime({
      targets: scrollElement,
      scrollTop: 0,
      duration: 500,
      easing: 'easeInOutQuad',
    });
  };
  element.addEventListener('click', scroll);
};

export default setupBtnUp;
