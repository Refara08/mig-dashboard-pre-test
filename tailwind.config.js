/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#808080",
        mygreen: "#8FB493",
        "greenish-gray": "#F4FAF5",
      },
    },
  },
  plugins: [],
};
