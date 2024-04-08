/* eslint-disable no-undef */

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./*.{html,js}",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0051A4',
        secondary:"#F3F25B"
      }
    },
  },
}

