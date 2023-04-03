/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   theme: {
      extend: {
         width: {
            1100: '1100px',
         },
      },
      primary: {
         width: '1100px',
         center: true,
      },
   },
   plugins: [],
}
