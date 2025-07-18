// @flow

import React, { useMemo } from 'react';
import _ from 'underscore';
import DropdownButton from './DropdownButton';
import type { SortByProps } from '../types/InstantSearch';

const ICON_SORT_ASCENDING = 'sort alphabet up';
const ICON_SORT_DESCENDING = 'sort alphabet down';
const SORT_DIRECTION_DESCENDING = 'desc';

type Props = SortByProps & {
  /**
   * A list of label/value objects to use as the dropdown options.
   */
  items: Array<{ label: string, value: string }>
};

const SearchResultsSort = ({ useSortBy, ...props }: Props) => {
  const { currentRefinement, options, refine } = useSortBy(props);
  const { label, value } = _.findWhere(options, { value: currentRefinement }) || _.first(options);

  /**
   * Sets the icon variable based on the current sort value.
   *
   * @type {string}
   */
  const icon = useMemo(() => (
    value && value.endsWith(SORT_DIRECTION_DESCENDING)
      ? ICON_SORT_DESCENDING
      : ICON_SORT_ASCENDING
  ), [value]);

  return (
    <DropdownButton
      basic
      icon={icon}
      onChange={(e, data) => refine(data.value)}
      options={_.map(options, (option) => ({
        key: option.value,
        value: option.value,
        text: option.description || option.label
      }))}
      text={label}
      value={value}
    />
  );
};

export default SearchResultsSort;
