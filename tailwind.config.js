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
          100: "#E0F7FA", // Lightest cyan (backgrounds)
          300: "#4DD0E1", // Light cyan (secondary elements)
          500: "#00BCD4", // Primary cyan (buttons, accents)
          700: "#0097A7", // Dark cyan (headers)
          900: "#006064", // Darkest cyan (footers, dark mode accents)
        },
        buttonPrimary: {
          100: "#EDE7F6",
          500: "#673AB7", // main color
          700: "#4527A0", // hover
        },
        // Supporting Colors
        primaryElectric: "#00E5FF", // Electric cyan (highlights, hover states)
        primaryNavy: "#03045E", // Deep navy (text, dark backgrounds)
        // Functional Colors
        success: "#2ECC71", // Green (success states)
        error: "#E74C3C", // Red (errors)
        warning: "#FFC107", // Amber (warnings - softer than yellow)
        // Neutrals
        primaryText: "#333333",
        primaryBackground: "#F8F9FA", // Off-white
        primaryBorder: "#B2EBF2", // Light cyan border
      },
      fontFamily: {
        mainFont: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
});
/* eslint-enable no-undef */
