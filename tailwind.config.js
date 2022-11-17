/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  safelist: ['line-through'],
  theme: {
    extend: {},
  },
  plugins: [],
};
