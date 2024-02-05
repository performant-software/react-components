const { configure } = require('@performant-software/webpack-config');

module.exports = configure(__dirname, {
  resolve: {
    conditionNames: ['import', 'node', 'default']
  }
});
