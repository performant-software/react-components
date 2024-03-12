// @flow

import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import ControlledVocabulary from './routes/ControlledVocabulary';
import CoreData from './routes/CoreData';
import UserDefinedFields from './routes/UserDefinedFields';
import ZoteroTranslate from './routes/ZoteroTranslate';

// Configure environment variables
dotenv.config();

const expressMiddleWare = (router) => {
  router.use(bodyParser.urlencoded({ extended: false }));
  router.use(bodyParser.json());

  ControlledVocabulary.addRoutes(router);
  CoreData.addRoutes(router);
  UserDefinedFields.addRoutes(router);
  ZoteroTranslate.addRoutes(router);
};

export default expressMiddleWare;
