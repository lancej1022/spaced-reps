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
  // base: '/dist/',
  plugins: [solidPlugin(), vanillaExtractPlugin()],
  build: {
    rollupOptions: {
      input: 'popup.html',
    },
    target: 'esnext',
    polyfillDynamicImport: false,
  },
  server: {
    open: '/popup.html',
  },
});
