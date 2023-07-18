// @flow

import { Timer } from '@performant-software/shared-components';
import React, { useCallback, useRef, useState } from 'react';
import { Icon, Input, type InputProps } from 'semantic-ui-react';
import _ from 'underscore';
import { type SearchBoxProps } from '../types/InstantSearch';

type Props = InputProps & SearchBoxProps;

/**
 * This component is used with the `useSearchBox` function from Instant Search Hooks and renders an input element that
 * when changed will execute a new query.
 */
const SearchBox = ({ useSearchBox, ...props }: typeof Props) => {
  const {
    query,
    refine,
    clear,
    isSearchStalled
  } = useSearchBox(props);

  const [search, setSearch] = useState(query);
  const ref = useRef();

  /**
   * Clears the current search state.
   *
   * @type {(function(): void)|*}
   */
  const onClear = useCallback(() => {
    // Reset the query view
    setSearch('');

    // Clear the results
    clear();

    // Refocus the input element
    const { current: instance } = ref;
    if (instance) {
      instance.focus();
    }
  }, [clear]);

  /**
   * Calls the refine prop when the search changes.
   *
   * @type {function(): void}
   */
  const onSearch = useCallback(() => refine(search), [refine, search]);

  return (
    <Input
      {...props}
      aria-label='Search'
      icon={(
        <Icon
          link={!_.isEmpty(query)}
          name={_.isEmpty(query) ? 'search' : 'times'}
          onClick={onClear}
        />
      )}
      input={{
        'aria-label': 'search'
      }}
      loading={isSearchStalled}
      onChange={(e, { value }) => setSearch(value)}
      onKeyDown={() => Timer.clearSearchTimer()}
      onKeyUp={() => Timer.setSearchTimer(onSearch)}
      ref={ref}
      type='text'
      value={search}
    />
  );
};

export default SearchBox;
