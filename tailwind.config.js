/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'gradient-top': '#EAE9FE',
        'gradient-bottom': '#D6D5FF',
        'font-purple':'#5C37EB',
        'font-black':'#1A1919',
        'font-gray':'#4D4D4D',
        'font-nuela':'#635BFF ',
        'toggle-gray':'#F5F5F5',
        'table-th':'#A5A5A5',
        'table-thead':'#FBFBFB',
        'table-border':'#ECECEC'

      }
    },
    fontFamily: {
      primary: ['Onest', 'sans-serif'],
      secondary: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
}

