/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        transparentBlack: "#00000033",
        black: "#000000",
        white: "#ffffff",
        grey: "#10151b",
        hoverText: "#707376",
        yellow: "#ffc83d",
        purple: "#8c46fc",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
