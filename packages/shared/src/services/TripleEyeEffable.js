// @flow

import { DirectUpload } from '@rails/activestorage';
import _ from 'underscore';

type ItemType = {
  content?: File
};

type BlobType = {
  signed_id: string
};

const DEFAULT_URL = '/triple_eye_effable/direct_uploads';

/**
 * Uploads the passed file to the passed active_storage URL.
 *
 * @param file
 * @param url
 * @returns {Promise<BlobType>}
 */
const directUpload = (file, url: string) => new Promise<BlobType>((resolve, reject) => {
  const upload = new DirectUpload(file, url);

  upload.create((error, blob) => {
    if (error) {
      reject(error);
    } else {
      resolve(blob);
    }
  });
});

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
 * @param url
 *
 * @returns {Promise<ItemType>}
 */
const upload = (item: ItemType, url: string = DEFAULT_URL) => new Promise<ItemType>((resolve, reject) => {
  // Return the item if no "content" attribute is present
  if (!item.content) {
    resolve(item);
  }

  // Direct upload the file, set the signed ID, and return the passed item.
  return directUpload(item.content, url)
    .then((blob) => setSignedId(item, blob))
    .then(resolve)
    .catch(reject);
});

/**
 * Uploads the "content" attribute for all of the passed item, if present.
 *
 * @param items
 * @param url
 *
 * @returns {Promise<Awaited<unknown>[]>}
 */
const uploadAll = (items: Array<ItemType>, url: string = DEFAULT_URL) => {
  return Promise.all(_.map(items, (item) => upload(item, url)));
};

export default {
  directUpload,
  upload,
  uploadAll
};
