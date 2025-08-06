// tailwind.config.js
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  safelist: ["animate-float-up", "animate-float-down", "floating-object"],
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(10px, -10px)" },
          "50%": { transform: "translate(0px, 10px)" },
          "75%": { transform: "translate(-10px, -5px)" },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
      },
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
