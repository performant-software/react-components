// @flow

import CSL from 'citeproc';
import React, { useCallback, useEffect, useState } from 'react';
import _ from 'underscore';
import ZoteroTranslationClient from 'zotero-translation-client';
import i18n from '../i18n/i18n';

type Props = {
  item: {
    uid: string,
    data: any
  },
  locale: string,
  style: string
};

const Citation = (props: Props) => {
  const [formattedCitation, setFormattedCitation] = useState();

  /**
   * Validates the passed item.
   *
   * @param item
   *
   * @returns {*}
   */
  const validateItem = useCallback((item) => {
    const validItem = { ...item };

    // Handle completely empty record
    if (_.isEmpty(validItem.title) && _.isEmpty(validItem.creators) && _.isEmpty(validItem.issue)) {
      _.extend(validItem, { title: i18n.t('Citation.labels.untitled') });
    }

    return validItem;
  }, []);

  /**
   * Format the citation record by coverting the Zotero JSON to CSL.
   */
  useEffect(() => {
    if (props.locale && props.style && props.item) {
      // Translate from Zotero JSON to CSL
      const { uid, ...rest } = props.item;

      const translator = new ZoteroTranslationClient({
        initialItems: [{ key: uid, ...validateItem(rest) }],
        persist: false
      });

      const item = _.first(translator.itemsCSL);

      // Use the CSL engine to format the item
      const sys = {
        retrieveLocale: () => props.locale,
        retrieveItem: () => item
      };

      const citeproc = new CSL.Engine(sys, props.style);
      citeproc.updateItems([item.id]);

      // Save the citation on the state.
      const result = citeproc.makeBibliography();
      setFormattedCitation(_.last(result));
    }
  }, [validateItem, props.item, props.locale, props.style]);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: formattedCitation
      }}
    />
  );
};

export default Citation;
