// @flow

import { faker } from '@faker-js/faker';
import _ from 'underscore';
import Base, { BASE_URL } from './Base';

/**
 * Class responsible for handling all manifest API requests for the Storybook Core Data API.
 */
class Manifests extends Base {
  /**
   * Returns a single IIIF manifest.
   *
   * @param route
   * @param count
   *
   * @returns {{id: string, label: {en: string[]}, type: string, '@context': string[], items: []}}
   */
  fetchItem(route, count, manifestUrl) {
    const items = [];

    _.times(count, () => {
      const imageId = faker.string.uuid();

      const width = faker.number.int({ min: 250, max: 800 });
      const height = faker.number.int({ min: 250, max: 800 });
      const imageUrl = faker.image.url(width, height);

      items.push({
        id: `/resources/${imageId}/page/1`,
        type: 'Canvas',
        width,
        height,
        label: {
          en: [
            faker.lorem.words({ min: 1, max: 5 })
          ]
        },
        metadata: _.map([...Array(5).keys()], () => ({
          label: faker.lorem.words({ min: 1, max: 3 }),
          value: faker.lorem.words({ min: 1, max: 10 })
        })),
        items: [{
          id: `/resources/${imageId}/page/1/annotation_page/1`,
          type: 'AnnotationPage',
          items: [{
            id: `/resources/${imageId}/page/1/annotation_page/1/annotation/1`,
            type: 'Annotation',
            motivation: 'painting',
            body: {
              id: imageUrl,
              type: 'Image',
              format: 'image/jpeg',
              service: [{
                id: imageUrl,
                type: 'ImageService3',
                profile: 'http://iiif.io/api/image/3/level1.json'
              }]
            },
            target: `/resources/${imageId}/page/1`
          }]
        }]
      })
    });

    return {
      '@context': [
        'http://www.w3.org/ns/anno.jsonld',
        'http://iiif.io/api/presentation/3/context.json'
      ],
      id: manifestUrl,
      type: 'Manifest',
      items: items,
      label: {
        en: [
          faker.lorem.words({ min: 1, max: 5 })
        ]
      }
    };
  }

  /**
   * Returns a IIIF Collection Manifest.
   *
   * @param route
   * @param count
   *
   * @returns {{id: string, label: {en: string[]}, type: string, '@context': string, items: []}}
   */
  fetchItems(route, count) {
    const itemId = faker.string.uuid();
    const manifestId = faker.string.uuid();

    const id = `${BASE_URL}/${route}/${itemId}/manifests`;
    const name = faker.lorem.words({ min: 1, max: 3 });

    const items = [];

    _.times(count, () => {
      items.push({
        id: `${id}/${manifestId}`,
        type: 'Manifest',
        item_count: faker.number.int({ min: 1, max: 20 }),
        label: {
          en: [
            faker.lorem.words({ min: 1, max: 3 })
          ]
        },
        thumbnail: [{
          id: faker.image.url(),
          type: 'Image',
          format: 'image/jpeg',
          width: 250,
          height: 250
        }]
      })
    });

    return {
      '@context': 'http://iiif.io/api/presentation/3/context.json',
      id,
      type: 'Collection',
      label: {
        en: [
          name
        ]
      },
      items
    }
  }
}

export default new Manifests();
