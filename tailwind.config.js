/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors:{
      Nutmeg: 'hsl(14, 45%, 36%)',
      DarkRaspberry: 'hsl(332, 51%, 32%)',
      White: 'hsl(0, 0%, 100%)',
      RoseWhite: 'hsl(330, 100%, 98%)',
      Eggshell: 'hsl(30, 54%, 90%)',
      LightGrey: 'hsl(30, 18%, 87%)',
      WengeBrown: 'hsl(30, 10%, 34%)',
      DarkCharcoal:' hsl(24, 5%, 18%)'
    },
    fontFamily:{
      young: ['Young Serif', 'serif'],
      outfit: ['Outfit', 'sans-serif']
    }
  },
  plugins: [],
}

