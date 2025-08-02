// tailwind.config.js
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          light: "#F3E8FF",
          DEFAULT: "#C084FC",
          dark: "#7E22CE",
        },
        pink: {
          light: "#FFE4F0",
          DEFAULT: "#F9A8D4",
        },
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
        script: ["Dancing Script", "cursive"],
      },
    },
  },
  plugins: [],
};
