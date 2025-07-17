// @flow

import _ from 'underscore';
import api from 'zotero-api-client';
import BibliographyTypes from '../resources/BibliographyTypes.json';

const hiddenFields = [
  'mimeType',
  'linkMode',
  'charset',
  'md5',
  'mtime',
  'version',
  'key',
  'collections',
  'relations',
  'parentItem',
  'contentType',
  'filename',
  'tags',
  'creator',
  'abstractNote',
  'notes',
  'rights',
  'extra'
];

const noEditFields = [
  'modified',
  'filename',
  'dateAdded',
  'dateModified'
];

/**
 * Checks the API cache for the passed key.
 *
 * @param key
 *
 * @returns {boolean}
 */
const apiCheckCache = (key) => {
  let cacheTimes = {};
  let okToUseCache = false;

  try {
    cacheTimes = JSON.parse(localStorage.getItem('zotero-bib-api-cache')) || {};
    // eslint-disable-next-line no-unused-vars
  } catch (e) {
    // ignore
  }

  if (key in cacheTimes) {
    okToUseCache = (Date.now() - cacheTimes[key]) < 24 * 60 * 60 * 1000;
  }

  if (!okToUseCache) {
    cacheTimes[key] = Date.now();
    localStorage.setItem('zotero-bib-api-cache', JSON.stringify(cacheTimes));
  }

  return okToUseCache;
};

/**
 * Returns the fields for the passed item. This function was largely copied directly from zotero/bib-web.
 *
 * @param item
 * @param itemTypeFields
 * @param itemTypes
 *
 * @returns {{item, fields: Array<T|unknown>}|{item, fields: *[]}}
 */
const getFieldsAndItem = (item, itemTypeFields, itemTypes) => {
  if (!item || !itemTypeFields || !itemTypes) {
    return { item, fields: [] };
  }

  const titleField = (item.itemType in BibliographyTypes && BibliographyTypes[item.itemType]?.title) || 'title';
  let fields = [
    { field: 'itemType', localized: 'Item Type' },
    itemTypeFields.find((itf) => itf.field === titleField),
    { field: 'creators', localized: 'Creators' },
    ...itemTypeFields.filter((itf) => itf.field !== titleField)
  ]
    .filter((f) => f && !hiddenFields.includes(f.field))
    .concat([
      itemTypeFields.find((itf) => itf.field === 'abstractNote'),
      itemTypeFields.find((itf) => itf.field === 'extra')
    ]);

  // Add Original Date field to book and bookSection #188
  if (['book', 'bookSection'].includes(item.itemType)) {
    const dateIndex = fields.findIndex((f) => f.field === 'date');
    fields.splice(dateIndex + 1, 0, { field: 'original-date', localized: 'Original Date' });
    const matches = 'extra' in item && item.extra.match(/^original-date:\s*(.*?)$/);
    if (matches) {
      _.extend(item, {
        'original-date': matches[1],
        extra: item.extra.replace(/^original-date:\s*.*?$/, '')
      });
    }
  }

  // Add Publisher to webpage
  if (['webpage'].includes(item.itemType)) {
    const beforeIndex = fields.findIndex((f) => f.field === 'websiteType');
    fields.splice(beforeIndex + 1, 0, { field: 'publisher', localized: 'Publisher' });
    const matches = 'extra' in item && item.extra.match(/^publisher:\s*(.*?)$/i);
    if (matches) {
      _.extend(item, {
        publisher: matches[1],
        extra: item.extra.replace(/^publisher:\s*.*?$/, '')
      });
    }
  }

  fields = fields.map((f) => ({
    options: f.field === 'itemType' ? itemTypes : null,
    key: f.field,
    label: f.localized,
    readonly: noEditFields.includes(f.field),
    processing: false,
    value: f.field in item ? item[f.field] : null
  }));

  return { item, fields };
};

/**
 * Calls the Zotero API to get the fields for the passed item type.
 *
 * @param itemType
 * @param retryOnFailure
 *
 * @returns {Promise<{itemTypes, itemTypeFields, itemTypeCreatorTypes}|*>}
 */
const getItemTypeMeta = async (itemType: string, retryOnFailure: boolean = true): any => {
  let itemTypes;
  let itemTypeFields;
  let itemTypeCreatorTypes;

  try {
    const [itemTypeR, itemTypeFieldsR, creatorTypesR] = await Promise.all([
      api()
        .itemTypes()
        .get({ cache: apiCheckCache('itemTypes') ? 'force-cache' : 'default' }),
      api()
        .itemTypeFields(itemType)
        .get({ cache: apiCheckCache(`itemTypeFields-${itemType}`) ? 'force-cache' : 'default' }),
      api()
        .itemTypeCreatorTypes(itemType)
        .get({ cache: apiCheckCache(`itemTypeCreatorTypes-${itemType}`) ? 'force-cache' : 'default' })
    ]);

    itemTypes = itemTypeR.getData();
    itemTypeFields = itemTypeFieldsR.getData();
    itemTypeCreatorTypes = creatorTypesR.getData();
  } catch (e) {
    // Clear the api cache
    localStorage.removeItem('zotero-bib-api-cache');

    // Call again if we're re-trying on failure
    if (retryOnFailure) {
      return getItemTypeMeta(itemType, false);
    }

    // If all else fails, throw an exception
    throw e;
  }

  return {
    itemTypes,
    itemTypeFields,
    itemTypeCreatorTypes
  };
};

/**
 * Returns true if the passed identifier matches a URL pattern.
 *
 * @param id
 *
 * @returns {boolean}
 */
const isUrl = (id) => !!id.match(/^(https?:\/\/)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b(\S*)$/i);

export default {
  getFieldsAndItem,
  getItemTypeMeta,
  isUrl
};
