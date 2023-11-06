/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./Home/**/*.{js,jsx,ts,tsx}",
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
    extend: {
      spacing: {
        base: 4,
        sm: 8,
        md: 16,
        lg: 24,
        xl: 32,
        xxl: 40,
        xxxl: 48,
      },
    },
  },
  plugins: [],
};
