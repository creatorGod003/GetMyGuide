/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'navbar':['Montserrat', 'sans-serif'],
      'cursiveheader':['Playfair Display', 'serif'],
    }
  },
  plugins: [],
}