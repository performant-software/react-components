// @flow

import Events from '../api/core-data/Events';
import Places from '../api/core-data/Places';
import Organizations from '../api/core-data/Organizations';
import People from '../api/core-data/People';
import Taxonomies from '../api/core-data/Taxonomies';
import Manifests from '../api/core-data/Manifests';
import MediaContents from '../api/core-data/MediaContents';

/**
 * Adds the Core Data dummy routes.
 *
 * @param router
 */
const addRoutes = (router) => {

  /**
   * Core Data Public API.
   */
  router.get('/core_data/public/events/:id', (request, response) => {
    response.send(Events.createItem());
    response.end();
  });

  router.get('/core_data/public/places/:id', (request, response) => {
    response.send(Places.createItem());
    response.end();
  });

  router.get('/core_data/public/places/:id/events', (request, response) => {
    response.send(Events.createItems(5));
    response.end();
  });

  router.get('/core_data/public/places/:id/manifests', (request, response) => {
    response.send(Manifests.createItems('places', 5));
    response.end();
  });

  router.get('/core_data/public/places/:id/manifests/:manifest_id', (request, response) => {
    response.send(Manifests.createItem('places', 10));
    response.end();
  });

  router.get('/core_data/public/places/:id/media_contents', (request, response) => {
    response.send(MediaContents.createItems(5))
    response.end();
  });

  router.get('/core_data/public/places/:id/organizations', (request, response) => {
    response.send(Organizations.createItems(5))
    response.end();
  });

  router.get('/core_data/public/places/:id/people', (request, response) => {
    response.send(People.createItems(5));
    response.end();
  });

  router.get('/core_data/public/places/:id/places', (request, response) => {
    response.send(Places.createItems(5));
    response.end();
  });

  router.get('/core_data/public/places/:id/taxonomies', (request, response) => {
    response.send(Taxonomies.createItems(5))
    response.end();
  });

  /**
   * Core Data Linked Places API.
   */
  router.get('/core_data/public/linked_places/places/:id', (request, response) => {
    response.send(Places.createItems(5));
    response.end();
  });
};

export default {
  addRoutes
};
