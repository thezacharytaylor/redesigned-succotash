/** @type {import('tailwindcss').Config} */
// const withMT = require('@material-tailwind/react/utils/withMT');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  safelist: ['line-through'],
  theme: {
    colors: {
      kinetic: '#00aef0',
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    theme: ['dracula', 'halloween'],
  },
};
