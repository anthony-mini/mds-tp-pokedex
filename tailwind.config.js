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
      spacing: {
        0.25: '0.0625rem'
      },
      animation: {
        blink: 'blink 2s linear infinite',
        spin: 'spin 3s linear infinite'
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 }
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      }
    }
  },
  variants: {},
  plugins: []
};
