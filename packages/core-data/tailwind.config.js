/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        'event-selected': '#3758F9',
        muted: '#0005119e'
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
