// @flow

import React from 'react';
import _ from 'underscore';
import DropdownButton from './DropdownButton';
import i18n from '../i18n/i18n';
import { type HitsPerPageProps } from '../hooks/InstantSearch';

type Props = HitsPerPageProps & {
  options: Array<number>
};

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
