/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ⬇️ REEMPLAZAR/AGREGAR DESDE AQUÍ ⬇️
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(300%)' },
        }
      }
      // ⬆️ HASTA AQUÍ ⬆️
    },
  },
  plugins: [],
}