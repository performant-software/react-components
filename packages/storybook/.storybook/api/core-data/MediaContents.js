// @flow

import Base from './Base';
import { faker } from '@faker-js/faker';

/**
 * Class responsible for handling all media contents API requests for the Storybook Core Data API.
 */
class MediaContents extends Base {
  /**
   * Creates a single media content item.
   *
   * @returns {{
   *   content_preview_url: string,
   *   content_type: string,
   *   content_inline_url: string,
   *   cotent_url: string,
   *   content_thumbnail_url: string,
   *   name: string,
   *   content_iiif_url: string,
   *   uuid: string,
   *   content_download_url: string
   * }}
   */
  buildItem() {
    const imageUrl = faker.image.url();

    return {
      content_type: 'image/jpeg',
      cotent_url: imageUrl,
      content_download_url: imageUrl,
      content_iiif_url: imageUrl,
      content_inline_url: imageUrl,
      content_preview_url: imageUrl,
      content_thumbnail_url: imageUrl,
      uuid: faker.string.uuid(),
      name: `${faker.lorem.word()}.jpeg`
    };
  }

  /**
   * Returns the media contents paramter name.
   *
   * @returns {string}
   */
  getIndexAttribute() {
    return 'media_contents';
  }

  getShowAttribute() {
    return 'media_content';
  }
}

export default new MediaContents();
