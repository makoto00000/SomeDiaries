/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'diary-bg': "url('/diarybg.png')",
      },
    },
    colors: {
      'mainColor' : '#E9E9E8',
      'subColor' : '#3F8495',
      'accentColor' : '#E6C241',
      'fontColor' : '#333333',
      'white' : '#ffffff',
      'gray' : '#C9C9C9',
      'borderColor' : '#707070',
    },
  },
  plugins: [],
}
