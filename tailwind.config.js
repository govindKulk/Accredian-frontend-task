/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'hero': '0px 0px 60px -15px rgba(0, 0, 0, 0.3)'
      }
    },
  },
  plugins: [],
}