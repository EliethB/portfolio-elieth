/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      'text-white': '0 1px 0 #fff, 0 2px 0 #fff, 0 3px 0 #fff, 0 4px 0 #fff, 0 5px 0 #fff, 0 6px 1px rgba(255, 255, 255, 0.1), 0 0 5px rgba(255, 255, 255, 0.1), 0 1px 3px rgba(255, 255, 255, 0.3), 0 3px 5px rgba(255, 255, 255, 0.2), 0 5px 10px rgba(255, 255, 255, 0.25), 0 10px 10px rgba(255, 255, 255, 0.2), 0 20px 20px rgba(255, 255, 255, 0.15)',
    },
  },
  plugins: [],
}
