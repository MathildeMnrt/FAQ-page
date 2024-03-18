/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grey: {
          100: "#F2F5F9",
          200: "#CDD5E0",
          300: "#97A3B6",
          400: "#12111F",
        },
        }
      }
    },
  plugins: [],
}