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
        'avatar-text-purple':'#5C37EB'
      }
    },
    fontFamily: {
      primary: ['Onest', 'sans-serif'],
      secondary: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
}

