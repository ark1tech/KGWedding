/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-bg": "#0C0C0C",
        "text": "#BFBFBF",
      },
      fontFamily: {
        Garamond: ["Cormorant Garamond", "serif"],
        Lora: ["Lora", "serif"],
        Playfair: ["Playfair Display", "serif"]
      },
      screens: {
        sm: "640px",
        md: "768px"
      },
      fontSize: {
        small: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
        '6xl': '3.66300rem',
        '7xl': '4.27400rem',
        'sl': '6.10400rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

