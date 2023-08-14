import ScrollMagic from 'scrollmagic';

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
          // console.log(index, elements.length - 1);
          item.classList.add('active');
        } else if (!(progress === 0 && index === 0)
          || !(progress === 100 && index === (elements.length - 1))) {
          if (!(index === elements.length - 1 && progress === 100)) { item.classList.remove('active'); }
        }
      });
    });
};

export default setupParallaxScroll;
