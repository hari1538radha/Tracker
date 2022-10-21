/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    spacing: {
      '51': '51px',
      '137':'137px',
      '0': '72px',
      '111':'111px',
      '11':'40px',
      '1104':'1104px',
      '53':'53px',
      '3':'11px'
    
    },
    fontSize:{
      '27':'27px'
    },
    fontFamily:{
      'poppins': ['Poppins', 'sans-serif'] 
    }
  },
  plugins: [],
}
