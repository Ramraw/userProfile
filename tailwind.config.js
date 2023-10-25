/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        snow: "#fbf7f4",
        "white-100": "#fff",
        "black-10": "rgba(0, 0, 0, 0.1)",
        "peak-primary": "#384d6c",
        "black-20": "rgba(0, 0, 0, 0.2)",
        "black-40": "rgba(0, 0, 0, 0.4)",
        "black-5": "rgba(0, 0, 0, 0.05)",
        lightgray: "#d1d5db",
        darkgray: "#abb1bb",
        slategray: "#6b7280",
        "black-100": "#1c1c1c",
      },
      spacing: {},
      fontFamily: {
        lato: "Lato",
        regular: "Inter",
        montserrat: "Montserrat",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      xl: "20px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
