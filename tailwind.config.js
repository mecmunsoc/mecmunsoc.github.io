/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend:
    {
      colors: {
        'primary':'#9B2226',
        'secondary':'#FAA307',
        'third':'#FDF0D5',
        'light_grey':'#D9D9D9'
      },
    },
  },
  plugins: [],
}