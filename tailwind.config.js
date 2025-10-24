/* eslint-disable no-undef */
const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "selector",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
    extend: {
      colors: {
        // Modern Cyan Palette
        primaryCyan: {
          100: "#E0F7FA",
          300: "#26C6DA",
          500: "#00ACC1",
          700: "#00838F",
          900: "#006064",
        },
        buttonPrimary: {
          100: "#EDE7F6",
          500: "#673AB7",
          700: "#4527A0",
        },
        primaryElectric: "#00E5FF",
        primaryNavy: "#03045E",
        success: "#2ECC71",
        error: "#E74C3C",
        warning: "#FFC107",
        primaryText: "#333333",
        primaryBackground: "#F8F9FA",
        primaryBorder: "#B2EBF2",
      },
      fontFamily: {
        mainFont: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
});
/* eslint-enable no-undef */
