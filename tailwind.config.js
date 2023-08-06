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
        'hex-none': "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"%3E%3Cdefs%3E%3Cpath id=\"prefix__a\" d=\"M0 31.427v52.977l132 26.937 132-31.427V26.937L132 0z\"/%3E%3C/defs%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cmask id=\"prefix__b\" fill=\"%23fff\"%3E%3Cuse xlink:href=\"%23prefix__a\"/%3E%3C/mask%3E%3Cpath d=\"M0 84.404h-6v4.899l4.8.98 1.2-5.88zm0-52.977l-1.39-5.837L-6 26.688v4.739h6zm132 79.914l-1.2 5.879 1.3.265 1.29-.307-1.39-5.837zm132-31.427l1.39 5.837 4.61-1.098v-4.739h-6zm0-52.977h6v-4.899l-4.8-.98-1.2 5.88zM132 0l1.2-5.879-1.3-.265-1.29.307L132 0zM6 84.404V31.427H-6v52.977H6zm127.2 21.058L1.2 78.525l-2.4 11.758 132 26.937 2.4-11.758zm129.41-31.385l-132 31.427 2.78 11.674 132-31.427-2.78-11.674zM258 26.937v52.977h12V26.937h-12zM130.8 5.88l132 26.937 2.4-11.758-132-26.937-2.4 11.758zM1.39 37.264l132-31.427-2.78-11.674-132 31.427 2.78 11.674z\" fill=\"%23345447\" fill-rule=\"nonzero\" mask=\"url(%23prefix__b)\"/%3E%3C/g%3E%3C/svg%3E')",
        'hex-fill': "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"%3E%3Cdefs%3E%3Cpath id=\"prefix__a\" d=\"M253.768 73.132V24.651L126.884 0 0 28.76v48.48l126.884 24.651z\"/%3E%3Cpath id=\"prefix__c\" d=\"M0 31.427v52.977l132 26.937 132-31.427V26.937L132 0z\"/%3E%3C/defs%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg transform=\"translate(5.116 4.725)\"%3E%3Cmask id=\"prefix__b\" fill=\"%23fff\"%3E%3Cuse xlink:href=\"%23prefix__a\"/%3E%3C/mask%3E%3Cpath fill=\"%23345447\" mask=\"url(%23prefix__b)\" d=\"M253.651 73.407v-48.48L126.768.276V.275v.001L-.116 29.035v48.481l126.884 24.65v.001-.001z\"/%3E%3C/g%3E%3Cmask id=\"prefix__d\" fill=\"%23fff\"%3E%3Cuse xlink:href=\"%23prefix__c\"/%3E%3C/mask%3E%3Cpath d=\"M0 84.404h-6v4.899l4.8.98 1.2-5.88zm0-52.977l-1.39-5.837L-6 26.688v4.739h6zm132 79.914l-1.2 5.879 1.3.265 1.29-.307-1.39-5.837zm132-31.427l1.39 5.837 4.61-1.098v-4.739h-6zm0-52.977h6v-4.899l-4.8-.98-1.2 5.88zM132 0l1.2-5.879-1.3-.265-1.29.307L132 0zM6 84.404V31.427H-6v52.977H6zm127.2 21.058L1.2 78.525l-2.4 11.758 132 26.937 2.4-11.758zm129.41-31.385l-132 31.427 2.78 11.674 132-31.427-2.78-11.674zM258 26.937v52.977h12V26.937h-12zM130.8 5.88l132 26.937 2.4-11.758-132-26.937-2.4 11.758zM1.39 37.264l132-31.427-2.78-11.674-132 31.427 2.78 11.674z\" fill=\"%23345447\" fill-rule=\"nonzero\" mask=\"url(%23prefix__d)\"/%3E%3C/g%3E%3C/svg%3E')",
        datepicker: "url('../assets/images/bg-datepicker.svg')",
      },
      boxShadow: {
        card: '11px 11px 24px 0px rgba(122, 159, 143, 0.10)',
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
