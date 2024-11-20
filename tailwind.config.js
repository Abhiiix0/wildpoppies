/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      extend: {
        fontFamily: {
          manrope: ["Manrope", "sans-serif"], // Add Manrope to the font family options
        },
      },
    },
  },
  plugins: [],
};
