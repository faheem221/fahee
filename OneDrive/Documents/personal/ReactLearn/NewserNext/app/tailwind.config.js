/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins':['Poppins', 'sans-serif'],
        'montserrat':['Montserrat', 'sans-serif'],
        'quicksand':['Quicksand', 'sans-serif']
       }
    },
    screens:{
      'iphone': "370px",
      'android':'450px',
      'ipadTablet':'700px',
      'desktop':'1336px',
      'medDevice':'600px'
    }
  },
  
  plugins: [
    require('tailwind-scrollbar')
  ],
}
