import anime from 'animejs';
// import bph from './bph';

const setupPreloader = () => {
  const preloaderContainer = document.createElement('div');
  preloaderContainer.innerHTML = `
    <div class='fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-white'>
      <i class='w-12 h-12 icon-[svg-spinners--ring-resize]'></i>
    </div>
  `;
  const preloader = preloaderContainer.querySelector('div');

  document.body.appendChild(preloader);
  const preloaderAnimation = () => anime({
    targets: preloader,
    opacity: 0,
    duration: 400,
    // delay: 100,
    easing: 'cubicBezier(.17,.67,.83,.67)',
    complete() {
      preloader.remove();
    },
  });

  document.addEventListener('DOMContentLoaded', preloaderAnimation);
};

export default setupPreloader;
