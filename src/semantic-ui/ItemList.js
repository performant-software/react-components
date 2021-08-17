// @flow

import React, { useEffect } from 'react';
import _ from 'underscore';
import Items from './Items';
import useDataList, { SORT_ASCENDING } from './DataList';

type Sort = {
  key: any,
  value: any,
  text: string,
  direction:? string
};

type Props = {
  items: Array<any>,
  page: number,
  onClearSelected?: () => void,
  onSelectAll: (items: Array<any>) => void,
  onSort: (column: string, direction: ?string, page?: number) => void,
  sort?: Array<Sort>,
  sortColumn?: string,
  sortDirection?: string
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
    const { page } = props;

    let { sortColumn = '', sortDirection = SORT_ASCENDING } = props;

    if (!sortColumn) {
      const defaultSort = _.first(props.sort);

      if (defaultSort) {
        sortColumn = defaultSort.value;

        if (defaultSort.direction) {
          sortDirection = defaultSort.direction;
        }
      }
    }

    props.onSort(sortColumn, sortDirection, page);
  }, []);

  return (
    <Items
      {...props}
      onClearSelected={props.onClearSelected && props.onClearSelected.bind(this)}
      onSelectAll={props.onSelectAll && props.onSelectAll.bind(this, props.items)}
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
