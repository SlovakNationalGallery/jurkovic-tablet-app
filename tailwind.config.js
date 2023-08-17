/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        slideshow1: "appear1 13s linear infinite",
        slideshow2: "appear2 13s linear infinite",
        slideshow3: "appear3 13s linear infinite",
        slideshow4: "appear4 13s linear infinite",
      },
      keyframes: {
        appear1: {
          "0%, 14%": {
            opacity: 1,
          },
          "15%, 88%": {
            opacity: 0,
          },
          "89%, 100%": {
            opacity: 1
          }
        },
        appear2: {
          "13%, 40%": {
            opacity: 1,
          },
          "41%, 100%": {
            opacity: 0,
          },
          "0%, 12%": {
            opacity: 0,
          },
        },
        appear3: {
          "0%, 38%": {
            opacity: 0,
          },
          "39%, 66%": {
            opacity: 1,
          },
          "67%, 100%": {
            opacity: 0,
          },
        },
        appear4: {
          "0%, 64%": {
            opacity: 0,
          },
          "65%, 90%": {
            opacity: 1,
          },
          "91%, 100%": {
            opacity: 0
          }
        },
      },
      fontFamily: {
        sans: ["SNG Sans"],
      },
    },
  },
  plugins: [],
  safelist: [
    'animate-slideshow1',
    'animate-slideshow2',
    'animate-slideshow3',
    'animate-slideshow4',
  ]
};
