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
        'event-selected': 'var(--color-event-selected)',
        gray: {
          '1000': 'var(--color-gray-1000)'
        },
        muted: 'var(--color-muted)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-neutral-200)'
      },
      fontFamily: {
        sans: [
          'Inter',
          ...fontFamily.sans
        ]
      }
    }
  },
  plugins: []
};
