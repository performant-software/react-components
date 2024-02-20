const { configure } = require('@performant-software/webpack-config');
const path = require('path');

module.exports = configure(__dirname, {
  resolve: {
    alias: {
      '../../theme.config$': path.join(__dirname, '/src/css/theme.config'),
      '../src/css/site': path.join(__dirname, '/src/css/site'),
      '../src/css/themes': path.join(__dirname, '/src/css/themes'),
      './react-calendar/dist/Calendar.css$': path.resolve(
        __dirname,
        '../../node_modules/react-calendar/dist/Calendar.css'
      ),
      './rc-slider/assets/index.css$': path.resolve(
        __dirname,
        '../../node_modules/rc-slider/assets/index.css'
      ),
      './react-pdf/dist/esm/Page/AnnotationLayer.css$': path.resolve(
        __dirname,
        '../../node_modules/react-pdf/dist/esm/Page/AnnotationLayer.css'
      ),
      './react-pdf/dist/esm/Page/TextLayer.css$': path.resolve(
        __dirname,
        '../../node_modules/react-pdf/dist/esm/Page/TextLayer.css'
      )
    }
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        semantic: {
          name: 'semantic-ui',
          test: /\.less$/,
          chunks: 'all',
          enforce: true
        },
        main: {
          name: 'main',
          chunks: 'all',
          enforce: true
        }
      }
    }
  }
});
