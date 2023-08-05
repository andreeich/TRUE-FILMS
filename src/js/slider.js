import { Splide } from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { Video } from '@splidejs/splide-extension-video';

// styles
import '@splidejs/splide/dist/css/splide-core.min.css';
import '@splidejs/splide-extension-video/dist/css/splide-extension-video.min.css';

const splideCarousel = document.querySelectorAll('.splide.splide--carousel-base');

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
  }).mount({ AutoScroll, Video });
});

const splideCarouselMini = document.querySelectorAll('.splide.splide--carousel-mini');

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
  }).mount({ AutoScroll, Video });
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
        perPage: 1, gap: '104px', padding: { left: '52px', right: '52px' }, drag: true,
      },
      991: {
        perPage: 2, drag: true,
      },
    },
  }).mount();
});

const splideStories = document.querySelectorAll('.splide.splide--stories');

splideStories.forEach((splide) => {
  new Splide(splide, {
    perPage: 1,
    gap: '212px',
    arrowPath: 'M40 19.509l-40 9.51V10z',
    pagination: false,
    padding: { left: '106px', right: '106px' },
    breakpoints: {
      640: {
        perPage: 1, gap: '120px', padding: { left: '60px', right: '60px' }, drag: true,
      },
      // 991: {
      //   perPage: 2, drag: true,
      // },
    },
  }).mount();
});
