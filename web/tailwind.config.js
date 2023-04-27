/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
      extend: {
        colors: {
          infline: {
              purple: '#B188EA',
              gray: '#D8D8D8',
          }
        },
        fontFamily: {
          'integral': ["IntegralCF", "sans-serif"],
          'poppins': ["Poppins", "sans-serif"]
        },
        screens: {
          '3xl': '2000px',
        }
      }
    }
  }