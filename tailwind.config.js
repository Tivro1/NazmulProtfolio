/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: ['Lexend', 'sans-serif'],
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        wave: 'wave 55s infinite linear',
        'wave-second': 'wave 50s infinite linear',
        'wave-third': 'wave 45s infinite linear',
      },
      boxShadow: {
        'glow-lg': '0 4px 40px rgba(0, 255, 255, 0.6)',  // Neon blue glow
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light"], // Sets the theme to light
  },
}
