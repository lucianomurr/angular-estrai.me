/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog from '@analogjs/platform';

import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

// @ts-expect-error @tailwindcss/vite currently uses mts. TypeScript is complaining this, but it works as expected.
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    root: __dirname,
    cacheDir: '../../node_modules/.vite',
    publicDir: 'src/assets',
    build: {
      outDir: '../../dist/apps/estrai.me/client',
      reportCompressedSize: true,
      target: ['es2020'],
    },
    plugins: [
      tailwindcss(),
      analog({
        ssr: false,
        static: true,
        additionalPagesDirs: ['/libs/game/', '/libs/auth/'],
        prerender: {
          routes: ['/', '/terms', '/about'],
          sitemap: {
            host: 'https://estrai.me',
          },
        },
      }),

      nxViteTsPaths(),
    ],
    server: {
      fs: {
        allow: ['.'],
      },
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['src/test-setup.ts'],
      include: ['**/*.spec.ts'],
      reporters: ['default'],
    },
    define: {
      'import.meta.vitest': mode !== 'production',
    },
  };
});
