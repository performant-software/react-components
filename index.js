const entry = require('./build/index.js');
const flow = require('./build/index.js.flow');

module.exports = {
  ...entry,
  ...flow
};
