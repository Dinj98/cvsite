const { Gowun_Dodum } = require("next/font/google");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // "my-green": "#31e7b6",
        // "dark-orange": "#f75b1e",
        // "light-orange": "#ffdccf",

        "my-orange": "#FF6F30 ",
        "my-gray": "#7D7D7D ",
        "my-lightBeige": "#F5F5DC ",
        "my-darkBeige": "#d6baa3",
      },
      screens: {
        mobile: "380px",
      },

      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-1deg)" },
          "50%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        anime: "wiggle 1s ease-in-out ",
      },
      dropShadow: {
        rezaShadow: "",
      },
    },
  },
  plugins: [],
};
