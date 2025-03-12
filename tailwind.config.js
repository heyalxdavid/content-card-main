/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#205ea3',
        text: {
          primary: '#21262A',
          secondary: '#5d686f'
        }
      }
    },
  },
  plugins: [],
};