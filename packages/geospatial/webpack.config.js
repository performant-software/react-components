const { configure } = require('@performant-software/webpack-config');
const path = require('path');

// Common config
const config = {
  externals: {
    '@peripleo/maplibre': '@peripleo/maplibre'
  },
  resolve: {
    alias: {
      './@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css$': path.resolve(
        __dirname,
        '../../node_modules/@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'
      ),
      './maplibre-gl/dist/maplibre-gl.css$': path.resolve(
        __dirname,
        '../../node_modules/maplibre-gl/dist/maplibre-gl.css'
      )
    }
  }
};

// CJS config
const cjs = configure(__dirname, {
  ...config,
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build/cjs'),
    libraryTarget: 'commonjs2'
  },
});

// ESM config
const es = configure(__dirname, {
  ...config,
  experiments: {
    outputModule: true
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build/es'),
    libraryTarget: 'module'
  },
});

module.exports = [
  es,
  cjs
];
