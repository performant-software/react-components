// @flow

import _ from 'underscore';

type ItemType = {
  content?: File
};

type BlobType = {
  signed_id: string
};

type HeadersType = {
  [key: string]: string
};

type OptionsType = {
  delegate?: any,
  headers?: HeadersType,
  url?: string
};

const DEFAULT_URL = '/triple_eye_effable/direct_uploads';

const DEFAULT_OPTIONS = {
  url: DEFAULT_URL
};

/**
 * Uploads the passed file to the passed active_storage URL.
 *
 * @param file
 * @param url
 * @param delegate
 * @param headers
 *
 * @returns {Promise<BlobType>}
 */
const directUpload = (file: File, url: string, delegate: any, headers: HeadersType) =>
  new Promise<BlobType>((resolve, reject) => {
    import('@rails/activestorage').then((module) => {
      const { DirectUpload } = module;
      const upload = new DirectUpload(file, url, delegate, headers);

      upload.create((error, blob) => {
        if (error) {
          reject(error);
        } else {
          resolve(blob);
        }
      });
    });
  }
);

/**
 * Replaces the "content" attribute with the "signed_id" from the blob in the passed item.
 *
 * @param item
 * @param blob
 *
 * @returns {*}
 */
const setSignedId = (item: ItemType, blob: BlobType) => _.extend(item, { content: blob.signed_id });

/**
 * Uploads the "content" attribute for the passed item, if present.
 *
 * @param item
 * @param options
 *
 * @returns {Promise<ItemType>}
 */
const upload = (item: ItemType, options: OptionsType = {}) =>
  new Promise<ItemType>((resolve, reject) => {
    // Return the item if no "content" attribute is present
    if (!item.content) {
      resolve(item);
    }

    // Populate default options
    const { delegate, headers, url } = _.defaults(options, DEFAULT_OPTIONS);

    // Direct upload the file, set the signed ID, and return the passed item.
    return directUpload(item.content, url, delegate, headers)
      .then((blob) => setSignedId(item, blob))
      .then(resolve)
      .catch(reject);
  }
);

/**
 * Uploads the "content" attribute for all of the passed item, if present.
 *
 * @param items
 * @param options
 *
 * @returns {Promise<Awaited<unknown>[]>}
 */
const uploadAll = (items: Array<ItemType>, options: OptionsType = {}) => {
  return Promise.all(_.map(items, (item) => upload(item, options)));
};

export default {
  directUpload,
  upload,
  uploadAll
};
