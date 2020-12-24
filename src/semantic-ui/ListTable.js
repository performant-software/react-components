// @flow

import React, { useEffect } from 'react';
import _ from 'underscore';
import DataTable from './DataTable';
import useDataList from './DataList';
import './ListTable.css';

import type { Column } from './DataTable';

type Props = {
  columns: Array<Column>,
  onSort: (sortColumn: string, sortDirection: string) => void,
  sortColumn: string,
  sortDirection: string
};

const SORT_ASCENDING = 'ascending';
const SORT_DESCENDING = 'descending';

const ListTable = (props: Props) => {
  /**
   * TODO: Comment me
   * @param column
   */
  const onColumnClick = (column) => {
    if (!column.sortable) {
      return;
    }

    const sortColumn = column.name;
    let sortDirection = SORT_ASCENDING;

    /**
     * If the column has not yet been click-sorted, check to see if there is a default sort
     * direction on the column. Otherwise, toggle the sort direction on the state.
     */
    if (column.sortDirection) {
      sortDirection = column.sortDirection;
    } else if (column.name === props.sortColumn) {
      sortDirection = props.sortDirection === SORT_ASCENDING ? SORT_DESCENDING : SORT_ASCENDING;
    }

    props.onSort(sortColumn, sortDirection);
  };

  /**
   * TODO: Comment me
   */
  useEffect(() => {
    onColumnClick(_.findWhere(props.columns, { sortable: true }));
  }, []);

  return (
    <DataTable
      {...props}
      onColumnClick={onColumnClick.bind(this)}
    />
  );
};

ListTable.defaultProps = {
  configurable: true,
  filters: {},
  onCopy: undefined,
  renderDeleteModal: undefined,
  renderEmptyRow: undefined,
  searchable: true,
  tableProps: {
    celled: true,
    sortable: true
  }
};

export default useDataList(ListTable);
