// !flow

/**
 * Returns a URL for the passed IIIF manifest string.
 *
 * @param manifest
 *
 * @returns {string}
 */
const createManifestURL = (manifest) => (
  URL.createObjectURL(new Blob([manifest], {
    type: 'application/ld+json'
  }))
);

export default {
  createManifestURL
};
