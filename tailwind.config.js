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
      },
      animation: {
        fade: "fade 160ms ease-in",
      },
    },
  },
  plugins: [],
};
