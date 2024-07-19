/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors:{
            'Dark_blue':'#0B131E',
            'Light_dark_blue':'#202B3B',
        },
        spacing:{
            '1%':'1%',
            '2%':'2%',
            '3%':'3%',
            '7%':'7%',
            '5%':'5%',
            '17%':'17%',
            '9%':'9%',
            '6%':'6%',
            '87%':'87%',
            '89%':'89%',
            '92%':'92%',
            '95%':'95%',
            '60%':'61%'
        },
    },
  },
  plugins: [],
}