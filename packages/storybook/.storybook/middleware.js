// @flow

const bodyParser = require('body-parser');
const ControlledVocabulary = require('./routes/ControlledVocabulary');
const dotenv = require('dotenv');
const UserDefinedFields = require('./routes/UserDefinedFields');
const ZoteroTranslate = require('./routes/ZoteroTranslate');

// Configure environment variables
dotenv.config();

const expressMiddleWare = (router) => {
  router.use(bodyParser.urlencoded({ extended: false }));
  router.use(bodyParser.json());

  ControlledVocabulary.addRoutes(router);
  UserDefinedFields.addRoutes(router);
  ZoteroTranslate.addRoutes(router);
};

module.exports = expressMiddleWare;
