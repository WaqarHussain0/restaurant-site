/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "banner2-bgImage": "url('./assets/imgs/04.png')",
        "reviewImage-bgImage": "url('./assets/imgs/03.png')",
      },
    },
  },
  plugins: [],
};
