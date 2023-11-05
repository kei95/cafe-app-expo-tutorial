/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      bgLight: "#d4a574",
      bgDark: "#8c5319",
      text: "#3C2A21",
      textBackground: "#00000012",
    },
  },
  plugins: [],
};
