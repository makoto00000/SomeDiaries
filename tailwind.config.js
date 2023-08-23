/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
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
        'google-login': "url(/google_signin.png)"
      },
      animation: {
        "fade-in": "fade-in 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both",
        "fade-out": "fade-out 1s ease   both",
        heartbeat: "heartbeat 1.5s ease  infinite both",
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0"
          },
          to: {
            opacity: "1"
          }
        },
        "fade-out": {
          "0%": {
            opacity: "1"
          },
          to: {
            opacity: "0"
          }
        },
        heartbeat: {
          "0%": {
              transform: "scale(1)",
              "transform-origin": "center center",
              "animation-timing-function": "ease-out"
          },
          "10%": {
              transform: "scale(.91)",
              "animation-timing-function": "ease-in"
          },
          "17%": {
              transform: "scale(.98)",
              "animation-timing-function": "ease-out"
          },
          "33%": {
              transform: "scale(.87)",
              "animation-timing-function": "ease-in"
          },
          "45%": {
              transform: "scale(1)",
              "animation-timing-function": "ease-out"
          }
        },
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
      'errorColor' : '#AE4B62',
    },
  },
  plugins: [],
}
