/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        forest: {
          dark: '#3B6D11',
          mid: '#639922',
          light: '#EAF3DE',
        },
        amber: {
          dark: '#BA7517',
          light: '#FAEEDA',
          mid: '#FAC775',
        },
        coral: {
          dark: '#993C1D',
          light: '#FAECE7',
        },
        neutral: {
          ink: '#2C2C2A',
          muted: '#888780',
          cream: '#F1EFE8',
        },
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
