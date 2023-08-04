/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        slideshow1: "appear1 16s linear infinite",
        slideshow2: "appear2 16s linear infinite",
        slideshow3: "appear3 16s linear infinite",
        slideshow4: "appear4 16s linear infinite",
      },
      keyframes: {
        appear1: {
          "0%, 24%": {
            opacity: 1,
          },
          "25%, 100%": {
            opacity: 0,
          },
        },
        appear2: {
          "0%, 24%": {
            opacity: 0,
          },
          "25%, 49%": {
            opacity: 1,
          },
          "50%, 100%": {
            opacity: 0,
          },
        },
        appear3: {
          "0%, 49%": {
            opacity: 0,
          },
          "50%, 74%": {
            opacity: 1,
          },
          "75%, 100%": {
            opacity: 0,
          },
        },
        appear4: {
          "0%, 74%": {
            opacity: 0,
          },
          "75%, 100%": {
            opacity: 1,
          },
        },
      },
      fontFamily: {
        sans: ["SNG Sans"],
      },
    },
  },
  plugins: [],
};
