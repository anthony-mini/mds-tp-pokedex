/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './src/**/*.tsx',
    './src/**/*.ts',
    './public/**/*.html'
    // Ajoutez d'autres chemins si nécessaire
  ],
  theme: {
    extend: {
      animation: {
        blink: 'blink 2s linear infinite'
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 }
        }
      }
    }
  },
  variants: {},
  plugins: []
};
