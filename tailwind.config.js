const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fef1f1",
          100: "#fee1e1",
          500: "#ee4343",
          600: "#dc2828",
          700: "#ba1b1b",
          800: "#971a1a",
        },
        secondary: {
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          500: "#78726d",
          700: "#433f3b",
          900: "#1c1917",
        },
        lightRed: "#F97676",
        lightGray: "#8176F9",
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
      screens: {
        "2xl": "1440px",
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(15rem, 1fr))",
      },
      width: {
        23.5: "23.5%",
        48.5: "48.5%",
      },
    },
  },
  plugins: [],
};
