import anime from 'animejs';

import { Splide } from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

// styles
import '@splidejs/splide/dist/css/splide-core.min.css';
import '@splidejs/splide-extension-video/dist/css/splide-extension-video.min.css';

const splideCarousel = document.querySelectorAll(
  '.splide.splide--carousel-base',
);

splideCarousel.forEach((splide) => {
  new Splide(splide, {
    type: 'loop',
    autoWidth: true,
    height: '548px',
    gap: '24px',
    arrowPath: 'M40 19.509l-40 9.51V10z',
    drag: 'free',
    pauseOnHover: true,
    pagination: false,
    autoScroll: {
      speed: 1,
    },
    breakpoints: {
      640: { height: '154px', gap: '7px' },
    },
  }).mount({ AutoScroll });

  splide.querySelectorAll('video').forEach((video) => {
    const container = video.parentElement;
    const playBtn = container.querySelector('.play-btn');
    const pauseBtn = container.querySelector('.pause-btn');

    playBtn.addEventListener('click', () => {
      video.play();
      playBtn.classList.add('hidden');
      pauseBtn.classList.remove('hidden');
    });

    pauseBtn.addEventListener('click', () => {
      video.pause();
      playBtn.classList.remove('hidden');
      pauseBtn.classList.add('hidden');
    });

    video.addEventListener('dblclick', () => {
      video.requestFullscreen();
    });
  });
});

const splideCarouselMini = document.querySelectorAll(
  '.splide.splide--carousel-mini',
);

splideCarouselMini.forEach((splide) => {
  new Splide(splide, {
    type: 'loop',
    autoWidth: true,
    height: '303px',
    gap: '24px',
    arrowPath: 'M40 19.509l-40 9.51V10z',
    drag: 'free',
    pauseOnHover: true,
    pagination: false,
    autoScroll: {
      speed: 1,
    },
    breakpoints: {
      640: { height: '192px', gap: '7px' },
    },
  }).mount({ AutoScroll });
});

const splidePackages = document.querySelectorAll('.splide.splide--packages');

splidePackages.forEach((splide) => {
  new Splide(splide, {
    perPage: 3,
    gap: '24px',
    arrowPath: 'M40 19.509l-40 9.51V10z',
    pagination: false,
    padding: { left: '24px', right: '24px' },
    drag: false,
    breakpoints: {
      640: {
        perPage: 1,
        gap: '104px',
        padding: { left: '52px', right: '52px' },
        drag: true,
      },
      991: {
        perPage: 2,
        drag: true,
      },
    },
  }).mount();
});

const splideStories = document.querySelectorAll('.splide.splide--stories');

const setCurrentSplideStoriesImage = (current) => {
  const duration = 300;
  anime({
    targets: '[data-splide-image]',
    opacity: 0,
    duration,
    easing: 'linear',
    begin() {
      anime({
        targets: current,
        opacity: 1,
        duration,
        easing: 'linear',
      });
    },
  });
};

splideStories.forEach((splide) => {
  const slider = new Splide(splide, {
    perPage: 1,
    gap: '212px',
    arrowPath: 'M40 19.509l-40 9.51V10z',
    pagination: false,
    padding: { left: '106px', right: '106px' },
    breakpoints: {
      640: {
        perPage: 1,
        gap: '120px',
        padding: { left: '60px', right: '60px' },
        drag: true,
      },
      // 991: {
      //   perPage: 2, drag: true,
      // },
    },
  }).mount();

  slider.on('active', (e) => {
    const activeDataSplide = e.slide.getAttribute('data-splide');
    const activeSplideImage = document.querySelector(`[data-splide-image="${activeDataSplide}"]`);
    setCurrentSplideStoriesImage(activeSplideImage);
  });
});
