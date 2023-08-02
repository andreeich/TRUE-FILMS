const { addDynamicIconSelectors } = require("@iconify/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    // Plugin with dynamic selectors for '.icon-'
    addDynamicIconSelectors({
      iconSets: {
        test: "./icon-sets/test.json",
      },
    }),
    // Plugin with dynamic selectors that contains
    // only css for overriding icon for '.icon-hover-'
    addDynamicIconSelectors({
      prefix: "icon-hover",
      overrideOnly: true,
      iconSets: {
        test: "./icon-sets/test.json",
      },
    }),
  ],
};
