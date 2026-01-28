/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        "main-green": "#62A939",
        "main-gray": "#F9F9F9",
        "alert": "#ED2100",
        "light-gray": "#F9F9F9",
        "border-gray": "#EAECEF",
 
      },
    },
    fontFamily: {
      Lato: "Lato, sans-serif",
    },
    container: {
      // center: true,
      // padding: "2rem",
    },
  },
  plugins: [],
};
