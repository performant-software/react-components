// @flow

import React from 'react';
import _ from 'underscore';
import DropdownButton from './DropdownButton';
import i18n from '../i18n/i18n';
import { type HitsPerPageProps } from '../types/InstantSearch';

type Props = HitsPerPageProps & {
  /**
   * An array of numeric values to present to the user as the number of records to display per page.
   */
  options: Array<number>
};

/**
 * This component is used with the `useHitsPerPage` hook from Instant Search Hooks and renders a dropdown with
 * options for the number of records to display per page.
 */
const SearchResultsPerPage = ({ useHitsPerPage, options }: Props) => {
  const { items, refine } = useHitsPerPage({
    items: _.map(options, (option, index) => ({
      label: option,
      value: option,
      default: index === 0
    }))
  });

  const { value } = _.findWhere(items, { isRefined: true });

  return (
    <DropdownButton
      basic
      icon='list'
      onChange={(e, data) => refine(data.value)}
      options={_.map(items, (item) => ({
        key: item.value,
        value: item.value,
        text: item.label
      }))}
      text={i18n.t('SearchResultsPerPage.labels.show', { value })}
      value={value}
    />
  );
};

export default SearchResultsPerPage;
