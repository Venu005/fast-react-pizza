/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },

    extend: {
      // extending tw color-pallete
      colors: {
        pizza: "#12243",
      },
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
