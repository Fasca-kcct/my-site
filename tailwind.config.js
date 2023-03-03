/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["M PLUS Rounded 1c"],
      },
    },
    // screens: {
    //   tablet: "640px",
    //   laptop: "1024px",
    //   desktop: "1280px",
    // },
  },
  plugins: [require("@tailwindcss/typography")],
}
