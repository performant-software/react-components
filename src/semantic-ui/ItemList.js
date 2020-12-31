// @flow

import React, { useEffect } from 'react';
import _ from 'underscore';
import Items from './Items';
import useDataList from './DataList';

type Sort = {
  key: any,
  value: any,
  text: string
};

type Props = {
  onSort: (value: any) => void,
  sort?: Array<Sort>
};

/**
 * An ItemList component can be used to render a list of records returned from an API. Under the hood, the DataList
 * component handles calling the API, storing the records, filters, etc, and the Items component handles the
 * presentation.
 *
 * @param props
 *
 * @returns {*}
 */
const ItemList = (props: Props) => {
  useEffect(() => {
    const { value } = (_.first(props.sort) || {});
    props.onSort(value);
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
  onSort: () => {},
  renderDeleteModal: undefined,
  renderEmptyRow: undefined,
  searchable: true,
};

export default useDataList(ItemList);
