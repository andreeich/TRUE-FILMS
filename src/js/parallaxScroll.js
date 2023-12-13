import ScrollMagic from 'scrollmagic';
// import anime from 'animejs';

const animActive = (item) => {
  // const desc = item.querySelector('.appr__desc');
  item.classList.add('active');

  // anime({
  //   targets: desc,
  //   height: '100%',
  //   opacity: '1',
  //   duration: 100,
  // });
};
const animDeactivate = (item) => {
  // const desc = item.querySelector('.appr__desc');
  item.classList.remove('active');

  // anime({
  //   targets: desc,
  //   height: '0px',
  //   opacity: '0',
  //   duration: 100,
  // });
};

const setupParallaxScroll = () => {
  const container = document.querySelector('#approach-section');

  const controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
    triggerElement: container,
    triggerHook: 'onLeave',
    duration: '3000',
  })
    .addTo(controller)
    .setPin(container)
    .on('progress', (scroll) => {
      const progress = scroll.progress * 100;
      // console.log(progress);
      const elements = document.querySelectorAll('.appr');

      elements.forEach((item, index) => {
        if (progress >= index * 25 && progress < (index + 1) * 25) {
          animActive(item);
        } else if (!(progress === 0 && index === 0)
          || !(progress === 100 && index === (elements.length - 1))) {
          if (!(index === elements.length - 1 && progress === 100)) { animDeactivate(item); }
        }
      });
    });
};

export default setupParallaxScroll;
