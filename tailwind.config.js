/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fade: {
          "0%": { opacity: 0, transform: "translateY(0.6rem)" },
          "100%": { opacity: 100, transform: "translateY(0)" },
        },
        show: {
          "0%, 49.99%": { opacity: 0, "z-index": 10 },
          "50%, 100%": { opacity: 1, "z-index": 50 },
        },
      },
      animation: {
        fade: "fade 160ms ease-in",
        show: "show 0.7s",
      },
      zIndex: {
        100: 100,
      },
    },
  },
  plugins: [],
};
