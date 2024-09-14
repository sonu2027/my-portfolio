/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        '1': "1px", // This sets the default border width to 2px
      },
    },
  },
  plugins: [],
};
