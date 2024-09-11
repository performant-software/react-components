// @flow

import { BASE_URL } from '../api/core-data/Base';
import Events from '../api/core-data/Events';
import Instances from '../api/core-data/Instances';
import Items from '../api/core-data/Items';
import Places from '../api/core-data/Places';
import Organizations from '../api/core-data/Organizations';
import People from '../api/core-data/People';
import Manifests from '../api/core-data/Manifests';
import MediaContents from '../api/core-data/MediaContents';
import Taxonomies from '../api/core-data/Taxonomies';
import Works from '../api/core-data/Works';

/**
 * Adds the Core Data dummy routes.
 *
 * @param router
 */
const addRoutes = (router) => {
  /**
   * Core Data Public API.
   */
  router.get(`${BASE_URL}/events/:id`, (request, response) => {
    response.send(Events.fetchItem());
    response.end();
  });

  router.get(`${BASE_URL}/events/:id/instances`, (request, response) => {
    response.send(Instances.fetchItems(5));
    response.end();
  });

  router.get(`${BASE_URL}/events/:id/items`, (request, response) => {
    response.send(Items.fetchItems(5));
    response.end();
  });

  router.get(`${BASE_URL}/events/:id/manifests`, (request, response) => {
    response.send(Manifests.fetchItems('events', 5));
    response.end();
  });

  router.get(`${BASE_URL}/events/:id/people`, (request, response) => {
    response.send(People.fetchItems(5));
    response.end();
  });

  router.get(`${BASE_URL}/events/:id/places`, (request, response) => {
    response.send(Places.fetchItems(5));
    response.end();
  });

  router.get(`${BASE_URL}/events/:id/works`, (request, response) => {
    response.send(Works.fetchItems(5));
    response.end();
  });

  router.get(`${BASE_URL}/events`, (request, response) => {
    const { count = '10', ...params } = request.query;

    response.send(Events.fetchItems(parseInt(count, 10), params));
    response.end();
  });

  router.get(`${BASE_URL}/places/:id`, (request, response) => {
    response.send(Places.fetchItem());
    response.end();
  });

  router.get(`${BASE_URL}/places/:id/events`, (request, response) => {
    response.send(Events.fetchItems(5));
    response.end();
  });

  router.get(`${BASE_URL}/places/:id/manifests`, (request, response) => {
    response.send(Manifests.fetchItems('places', 5));
    response.end();
  });

  router.get(`${BASE_URL}/places/:id/manifests/:manifest_id`, (request, response) => {
    response.send(Manifests.fetchItem('places', 10));
    response.end();
  });

  router.get(`${BASE_URL}/places/:id/media_contents`, (request, response) => {
    response.send(MediaContents.fetchItems(5))
    response.end();
  });

  router.get(`${BASE_URL}/places/:id/organizations`, (request, response) => {
    response.send(Organizations.fetchItems(5))
    response.end();
  });

  router.get(`${BASE_URL}/places/:id/people`, (request, response) => {
    response.send(People.fetchItems(5));
    response.end();
  });

  router.get(`${BASE_URL}/places/:id/places`, (request, response) => {
    response.send(Places.fetchItems(5));
    response.end();
  });

  router.get(`${BASE_URL}/places/:id/taxonomies`, (request, response) => {
    response.send(Taxonomies.fetchItems(5))
    response.end();
  });
};

export default {
  addRoutes
};
