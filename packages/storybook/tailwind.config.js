// eslint-disable-next-line import/no-extraneous-dependencies
import coreDataConfig from '@performant-software/core-data/tailwind.config';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [
    coreDataConfig
  ],
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    '../../node_modules/@performant-software/core-data/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: []
};
