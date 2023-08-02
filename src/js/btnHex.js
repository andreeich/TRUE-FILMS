import anime from 'animejs';
import { throttle } from 'throttle-debounce';

const setupBtnHex = (selector) => {
  const elements = document.querySelectorAll(selector);

  elements.forEach((element) => {
    const overflow = element.querySelector('#btn-hex-overflow');
    const duration = 400;

    const overflowDown = throttle(duration, () => {
      anime({
        targets: overflow,
        points: '253.65054 73.13156 253.65054 24.65096 126.76754 -0.00014 -0.11646 28.75956 -0.11646 77.24026 126.76754 101.89125',
        easing: 'cubicBezier(0.4, 0, 0.2, 1)',
        duration,
      });
    });
    const overflowUp = throttle(duration, () => {
      anime({
        targets: overflow,
        points: '253.65054 -27.59282 253.65054 -76.07342 126.76754 -100.72452 -0.11646 -71.96482 -0.11646 -23.48412 126.76754 1.16687',
        easing: 'cubicBezier(0.4, 0, 0.2, 1)',
        duration,
      });
    });

    element.addEventListener('mouseenter', overflowUp);
    element.addEventListener('mouseleave', overflowDown);
  });
};

export default setupBtnHex;
