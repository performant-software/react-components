// @flow

import { flowPlugin, esbuildFlowPlugin } from '@bunchtogether/vite-plugin-flow';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import * as packageJson from './package.json';

export default defineConfig(() => ({
  esbuild: {
    include: /\.js$/,
    exclude: [],
    loader: 'jsx'
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [esbuildFlowPlugin()]
    }
  },
  plugins: [
    react(),
    flowPlugin()
  ],
  build: {
    cssCodeSplit: true,
    sourcemap: true,
    lib: {
      cssFileName: 'style',
      entry: [
        './src/index.js',
        './src/tailwind.js',
        './src/ssr.js'
      ],
      formats: ['es', 'cjs'],
      fileName: (format, name) => {
        if (name.endsWith('ssr')) {
          return `ssr.${format}.js`;
        }

        return `index.${format}.js`;
      }
    },
    rollupOptions: {
      external: [
        ...Object.keys(packageJson.peerDependencies)
      ],
      output: {
        preserveModules: true
      }
    }
  }
}));
