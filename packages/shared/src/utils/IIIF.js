// !flow

/**
 * Returns a URL for the passed IIIF manifest string.
 *
 * @param manifest
 *
 * @returns {string}
 */
const createManifestURL = (manifest) => {
  if (!manifest) {
    return null;
  }

  return URL.createObjectURL(new Blob([manifest], {
    type: 'application/ld+json'
  }));
};

export default {
  createManifestURL
};
