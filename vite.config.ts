import { defineConfig } from 'vite';
import { resolve } from 'path';
import { version } from './package.json';

export default defineConfig({
  define: {
    __VERSION__: `"${version}"`,
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      name: 'lavendeux-js',
      fileName() {
        return 'lavendeux-js.js';
      },
    },
  },
});
