/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-bg": "#1E1E1E",
        "text": "#BFBFBF",
      },
      fontFamily: {
        Garamond: ["Cormorant Garamond", "serif"],
        Lora: ["Lora", "serif"]
      },
      screens: {
        sm: "640px",
        md: "768px"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

