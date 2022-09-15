/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#d6d6d631',
        secondary: '#efefef1a',
      },
    },
  },
  plugins: [],
};
