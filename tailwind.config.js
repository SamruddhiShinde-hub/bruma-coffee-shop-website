export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "coffee-brown": "#a67c52",
        cream: "#fcf7e6",
      },
      fontFamily: {
        serif: ["Tiempos", "Playfair Display", "serif"],
        sans: ["Balto", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
