import {fileURLToPath, URL} from 'node:url';
import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';

const config = defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('src', import.meta.url)),
      '~/*': fileURLToPath(new URL('src/*', import.meta.url)),
    },
  },
});

export default config;
