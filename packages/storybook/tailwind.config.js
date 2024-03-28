import coreDataConfig from '@performant-software/core-data/tailwind.config.js';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/index.css',
    './src/**/*.js',
    '../../node_modules/@performant-software/core-data/src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    ...coreDataConfig.theme,
    extend: {
      ...coreDataConfig.theme?.extend
    },
  },
  plugins: [
    ...coreDataConfig.plugins
  ]
};
