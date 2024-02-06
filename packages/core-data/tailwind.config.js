/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/index.css',
    './src/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        muted: '#0005119e'
      },
      fontFamily: {
        sans: ['-apple-system', 'Roboto', 'sans-serif'],
        'dm-display': ['DM Serif Display'],
      },
    },
  },
  plugins: []
};
