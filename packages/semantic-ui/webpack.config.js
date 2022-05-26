const { configure } = require('@performant-software/webpack-config');
const path = require('path');

module.exports = configure(__dirname, {
  resolve: {
    alias: {
      '../../theme.config$': path.join(__dirname, '/src/css/theme.config'),
      '../src/css/site': path.join(__dirname, '/src/css/site')
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
