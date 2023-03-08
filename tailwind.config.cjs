/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    ".src/**/*.{html,js,ts,jsx,tsx}",
    "./src/**/*"
  ],
  theme: {
    fontFamily: {
      primary: 'Oswald',
      secondary: 'Raleway',
      tertiary: 'Rozha One',
    },

    extend: {
      visibility: ["group-hover"],
      colors: {
        dark: '#111111',
        primary: "#4f46e5",
      }
    },
  },
  plugins: [],
}

// #F5385D