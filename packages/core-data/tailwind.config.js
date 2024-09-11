/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        'event-selected': '#3758F9',
        muted: '#0005119e',
        gray: {
          1000: '#505A6A'
        }
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'Roboto',
          'sans-serif'
        ],
        'dm-display': [
          'DM Serif Display'
        ]
      }
    }
  },
  plugins: []
};
