// @flow

import { flowPlugin, esbuildFlowPlugin } from '@bunchtogether/vite-plugin-flow';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import copy from 'rollup-plugin-copy';
import * as packageJson from './package.json';

export default defineConfig(() => ({
  esbuild: {
    include: /\.js$/,
    exclude: [],
    loader: 'jsx',
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [esbuildFlowPlugin()]
    }
  },
  plugins: [
    react(),
    flowPlugin(),
    copy({
      targets: [{
        src: 'tailwind.config.js',
        dest: 'dist',
      }],
      hook: 'writeBundle'
    })
  ],
  build: {
    cssCodeSplit: true,
    sourcemap: true,
    lib: {
      entry: [
        './src/index.js',
        './src/tailwind.js'
      ],
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format}.js`
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
