module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{
      custom: {
        primary: "#111",
        secondary: "#b1b1b1",
        accent: "white",
        neutral: "#242424",
        "base-100": "#ffffff",
      },
    }],
  },
}