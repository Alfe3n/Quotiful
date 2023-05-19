/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        violet: '#5E2AB3',
        red: '#D05252',
        green: '#009C51',
        grey: '#D9D9D9'
      }
    }
  },
  plugins: []
}
