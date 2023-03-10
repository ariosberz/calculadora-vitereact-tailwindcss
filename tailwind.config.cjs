/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/Calculadora.jsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
