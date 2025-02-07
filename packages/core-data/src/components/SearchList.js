// @flow

import React from 'react';
import { useInstantSearch } from 'react-instantsearch';
import { type Attribute } from '../types/SearchList';

type Props = {
  attributes: Attribute[]
};

const SearchList = (props: Props) => {
  const { results } = useInstantSearch();

  return (
    <div>
      {results.length}
    </div>
  );
};

export default SearchList;
