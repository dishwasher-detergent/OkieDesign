const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

module.exports = {  
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        yellow: colors.amber,
        gray: colors.slate,
      }
    }
  },  
  plugins: [],
}