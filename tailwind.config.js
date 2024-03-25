/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.ts"],
  theme: {
    fontFamily: {
      sans: ["Rubik", "sans-serif"],
    },
    colors: {
      white: "hsl(0deg, 0%, 100%)",
      gray: {
        400: "hsl(0, 0%, 59%)",
        800: "hsl(0, 0%, 17%)",
      },
    },
  },
  plugins: [],
};
