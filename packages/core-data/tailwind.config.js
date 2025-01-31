import colors from 'tailwindcss/colors';
import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.js',
    './src/**/*.css'
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
      },
      fontFamily: {
        inter: [
          'Inter',
          ...fontFamily.sans
        ]
      }
    }
  },
  plugins: []
};
