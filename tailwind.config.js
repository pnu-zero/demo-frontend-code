/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto'],
        freesentation: ['Freesentation'],
      },
      colors: {
        bjsBlue: '#00A3FF',
        bjsDeepBlue: '#0097EC',
        bjsLightSky: '#85AFFF',
        bhsSky: '#85AFFF',
        bjsDeepSky: '#6297FF',
        bjsGray: '#F8F8F8',
      },
    },
  },
  plugins: [],
};
