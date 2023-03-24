/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    animation: {
      bounceRight: "bounceRight 2s ease-in-out infinite",
      bounceLeft: "bounceLeft 2s ease-in-out infinite",
    },
    keyframes: {
      bounceRight: {
        "0%": { transform: "translateX(0%)", opacity: "0%" },
        "100%": { transform: "translateX(150%)", opacity: "100%" },
      },
      bounceLeft: {
        "0%": { transform: "translateX(0%)", opacity: "0%" },
        "100%": { transform: "translateX(-150%)", opacity: "100%" },
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    // ...
  ],
};
