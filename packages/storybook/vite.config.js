// @flow

import { flowPlugin, esbuildFlowPlugin } from '@bunchtogether/vite-plugin-flow';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig(() => ({
  esbuild: {
    include: /\.(js|jsx|ts|tsx)$/,
    exclude: [],
    loader: 'tsx',
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [esbuildFlowPlugin()]
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
  },
  plugins: [
    react(),
    flowPlugin(),
    tailwindcss(),
    dts({
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['src/**/*.stories.{ts,tsx}']
    })
  ]
}));
