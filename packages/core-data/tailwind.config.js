import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        'event-selected': '#3758F9',
        gray: {
          '1000': '#505A6A'
        },
        muted: '#0005119e',
        primary: '#073B4C',
        secondary: colors.neutral['200']
      }
    }
  },
  plugins: []
};
