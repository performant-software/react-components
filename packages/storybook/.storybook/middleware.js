// @flow

const bodyParser = require('body-parser');
const ControlledVocabulary = require('./routes/ControlledVocabulary');

const expressMiddleWare = (router) => {
  router.use(bodyParser.urlencoded({ extended: false }));
  router.use(bodyParser.json());

  ControlledVocabulary.addRoutes(router);
};

module.exports = expressMiddleWare;
