const { configure } = require('@performant-software/webpack-config');
const path = require('path');

module.exports = configure(__dirname, {
  resolve: {
    alias: {
      './react-quill/dist/quill.snow.css$': path.resolve(
        __dirname,
        '../../node_modules/react-quill/dist/quill.snow.css'
      )
    }
  }
});
