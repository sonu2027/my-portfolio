/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        "1": "1px",
      },
      width: {
        "50rem": "800px",
        "60rem": "960px",
      },
      screens: {
        "xs": "500px",
      },
    },
  },
  plugins: [],
};
