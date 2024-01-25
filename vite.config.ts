import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import css from 'rollup-plugin-css-only';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), css({ output: 'bundle.css' })],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer]
    }
  }
});
