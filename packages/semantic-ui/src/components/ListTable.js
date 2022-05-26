// @flow

import React, { useEffect } from 'react';
import _ from 'underscore';
import DataTable from './DataTable';
import useDataList, { SORT_ASCENDING, SORT_DESCENDING } from './DataList';
import './ListTable.css';

import type { Column } from './DataTable';

type Props = {
  columns: Array<Column>,
  defaultSort?: string,
  defaultSortDirection?: string,
  page: number,
  onSort: (sortColumn: string, sortDirection: string, page?: number) => void,
  onInit: (page?: number) => void,
  sortColumn: string,
  sortDirection: string
};

const ListTable = (props: Props) => {
  /**
   * Sorts the list by the selected column, and/or reverse the direction.
   *
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
    if (column.name === props.sortColumn) {
      sortDirection = props.sortDirection === SORT_ASCENDING ? SORT_DESCENDING : SORT_ASCENDING;
    } else if (column.sortDirection) {
      sortDirection = column.sortDirection;
    }

    props.onSort(sortColumn, sortDirection);
  };

  /**
   * Initializes the list by calling the onSort prop. If no sortColumn prop is passed, we'll sort the list by the first
   * sortable column.
   */
  useEffect(() => {
    const { page, defaultSort, defaultSortDirection = SORT_ASCENDING } = props;

    if (defaultSort) {
      props.onSort(defaultSort, defaultSortDirection, page);
    } else {
      const sortableColumn = _.findWhere(props.columns, { sortable: true });

      if (sortableColumn) {
        onColumnClick(sortableColumn);
      } else {
        // If no columns are sortable, load the data as is
        props.onInit();
      }
    }
  }, [props.columns]);

  return (
    <DataTable
      {...props}
      onColumnClick={onColumnClick.bind(this)}
    />
  );
};

ListTable.defaultProps = {
  configurable: true,
  onCopy: undefined,
  renderDeleteModal: undefined,
  renderEmptyRow: undefined,
  tableProps: {
    celled: true,
    sortable: true
  }
};

export default useDataList(ListTable);
