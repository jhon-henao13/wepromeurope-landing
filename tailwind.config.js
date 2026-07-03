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
        },

        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        // Animación infinita lineal y fluida
        marquee: 'marquee 35s linear infinite',

      }

    },
  },
  plugins: [],
}