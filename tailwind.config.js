/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-img": "url('../Assets/HeroBanner.jpg')",
      },
      extend: {
        fontFamily: {
          manrope: ["Manrope", "sans-serif"], // Add Manrope to the font family options
        },
      },
    },
  },
  plugins: [],
};
