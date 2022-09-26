import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import path from 'path';

export default defineConfig({
  // enables aliasing `~` to the project root -- see https://github.com/vitejs/vite/issues/88#issuecomment-762415200
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [solidPlugin(), vanillaExtractPlugin()],
  build: {
    chunkSizeWarningLimit: 1024 * 100, // 100kb limit per chunk, otherwise we're doing something wrong...
    rollupOptions: {
      input: ['popup.html', '/src/chrome/DomEvaluator.ts', 'src/tailwind.css'],
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
    target: 'esnext',
    polyfillDynamicImport: false,
  },
  server: {
    open: '/popup.html',
  },
});
