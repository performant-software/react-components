// @flow

import { flowPlugin, esbuildFlowPlugin } from '@bunchtogether/vite-plugin-flow';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import * as packageJson from './package.json';

const root = resolve(__dirname);

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
    sourcemap: true,
    lib: {
      cssFileName: 'style',
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
    alias: {
      '../../theme.config': resolve(root, '/src/css/theme.config'),
      '../src/css/site': resolve(root, '/src/css/site'),
      '../src/css/themes': resolve(root, '/src/css/themes'),
      '~semantic-ui-less/theme.less': resolve(root, '../../node_modules/semantic-ui-less/theme.less')
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        math: 'always',
        relativeUrls: true,
        javascriptEnabled: true
      }
    }
  }
}));
