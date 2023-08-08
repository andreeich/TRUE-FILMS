// eslint-disable-next-line import/no-import-module-exports
import { addDynamicIconSelectors } from '@iconify/tailwind';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#DDEEE7',
          200: '#7A9F8F',
          300: '#345447',
          400: '#032017',
        },
        secondary: '#B7B7B7',
        thirdly: '#DDEEE7',
      },
      fontFamily: {
        serif: ['Inria Serif', 'serif'],
      },
      backgroundImage: {
        datepicker: "url('../assets/images/bg-datepicker.svg')",
      },
      boxShadow: {
        card: '11px 11px 24px 0px rgba(122, 159, 143, 0.10)',
      },
      transitionProperty: {
        text: 'font-size, color',
      },
    },
  },
  plugins: [
    // Plugin with dynamic selectors for '.icon-'
    addDynamicIconSelectors({
      iconSets: {
        custom: './icon-sets/custom.json',
      },
    }),
    // Plugin with dynamic selectors that contains
    // only css for overriding icon for '.icon-hover-'
    addDynamicIconSelectors({
      prefix: 'icon-hover',
      overrideOnly: true,
      iconSets: {
        custom: './icon-sets/custom.json',
      },
    }),
  ],
};
