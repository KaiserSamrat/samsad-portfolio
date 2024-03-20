/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        dark_secondary: "#212121",
        light_green:"#009A3E33",
        dark_green: "#009A3E",
        dark_blue:"#2979F4"
      }
    },
  },
  plugins: [],
}