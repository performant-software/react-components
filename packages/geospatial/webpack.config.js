const { configure } = require('@performant-software/webpack-config');
const path = require('path');

module.exports = configure(__dirname, {
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
    },
    conditionNames: ['import', 'node', 'default']
  }
});
