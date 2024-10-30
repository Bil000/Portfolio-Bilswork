/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
      extend: { 
        width: {
        'screen-minus-20': 'calc(100vw - 20px)',
      },
       fontSize: {
        'responsive': ['clamp(1rem, 2vw + 1rem, 3rem)']
      }
    },
    },
    plugins: [],
  }
