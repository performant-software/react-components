// @flow

import React, { useCallback, useContext, useState } from 'react';
import { Button, Input } from 'semantic-ui-react';
import ZoteroTranslationClient from 'zotero-translation-client';
import BibliographyUtils from '../utils/Bibliography';
import i18n from '../i18n/i18n';
import ZoteroTranslateContext from '../context/ZoteroTranslateContext';
import './BibliographySearchInput.css';

type Props = {
  /**
   * Callback fired when the translator encounters an error.
   */
  onError: () => void,

  /**
   * Callback fired when the translator is successful.
   * @param items
   */
  onFind: (items: Array<any>) => void
};

/**
 * This component renders a search input and can be used within a `ZoteroTranslateContext` to lookup sources by URL,
 * ISBN, DOI, and more identifiers. The `ZoteroTranslateContext` requires a running
 * [Zotero Translation Server](https://github.com/zotero/translation-server) to be passed as the `translateUrl` key.
 */
const BibliographySearchInput = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const { translateUrl } = useContext(ZoteroTranslateContext);

  /**
   * Calls the onFind prop if the request is successful, otherwise onError.
   *
   * @type {(function(*): void)|*}
   */
  const onLoadItems = useCallback((response) => {
    const { ok } = response.response;

    if (ok) {
      props.onFind(response.items);
    } else {
      props.onError();
    }
  }, [props.onFind]);

  /**
   * Uses the Zotero Translation API client to translate the search query.
   *
   * @type {(function(): void)|*}
   */
  const onSearch = useCallback(() => {
    setLoading(true);

    const translator = new ZoteroTranslationClient({
      translateURL: translateUrl,
      persist: false
    });

    if (BibliographyUtils.isUrl(searchQuery)) {
      translator
        .translateUrl(searchQuery, { add: false })
        .then(onLoadItems)
        .finally(() => setLoading(false));
    } else {
      translator
        .translateIdentifier(searchQuery, { add: false })
        .then(onLoadItems)
        .finally(() => setLoading(false));
    }
  }, [searchQuery]);

  return (
    <div
      className='bibliography-search-input'
    >
      <Input
        autoFocus
        disabled={loading}
        onChange={(e, { value }) => setSearchQuery(value)}
        placeholder={i18n.t('BibliographySearchInput.labels.placeholder')}
        value={searchQuery}
      />
      <Button
        className='search-button'
        content={i18n.t('Common.buttons.search')}
        disabled={loading}
        loading={loading}
        onClick={onSearch}
        primary
      />
    </div>
  );
};

export default BibliographySearchInput;
