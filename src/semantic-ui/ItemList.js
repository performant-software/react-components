// @flow

import React, { useEffect } from 'react';
import _ from 'underscore';
import Items from './Items';
import useDataList from './DataList';

const ItemList = (props) => {
  useEffect(() => {
    const sort = _.first(props.sort);
    if (sort) {
      props.onSort(sort.value);
    }
  }, []);

  return (
    <Items
      {...props}
    />
  );
};

ItemList.defaultProps = {
  filters: {},
  onCopy: undefined,
  renderDeleteModal: undefined,
  renderEmptyRow: undefined,
  searchable: true,
};

export default useDataList(ItemList);
