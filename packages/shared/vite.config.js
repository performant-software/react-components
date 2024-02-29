// @flow

import { flowPlugin, esbuildFlowPlugin } from '@bunchtogether/vite-plugin-flow';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
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
    flowPlugin()
  ],
  build: {
    sourcemap: true,
    lib: {
      entry: './src/index.js',
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
  },
  resolve: {
    preserveSymlinks: true,
    mainFields: [
      'browser',
      'module',
      'main',
      'jsnext:main',
      'jsnext'
    ]
  }
}));
