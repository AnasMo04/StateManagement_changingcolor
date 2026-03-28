/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'flms-dark': '#1a2234',
        'flms-blue': '#2c3e50',
        'flms-primary': '#00b894',
      }
    },
  },
  plugins: [],
}
