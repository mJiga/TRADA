/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jitt',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}