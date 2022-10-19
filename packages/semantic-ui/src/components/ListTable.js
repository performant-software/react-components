// @flow

import { Hooks, Object as ObjectUtils } from '@performant-software/shared-components';
import React, { useEffect } from 'react';
import _ from 'underscore';
import DataTable from './DataTable';
import type { Props as DataTableProps } from './DataTable';
import useDataList, { SORT_ASCENDING, SORT_DESCENDING, type Props as DataListProps } from './DataList';
import './ListTable.css';

type Props = DataListProps & DataTableProps & {
  /**
   * If true, columns can be shown/hidden by the user
   */
  configurable?: boolean,

  /**
   * The name of the default sort column
   */
  defaultSort?: string,

  /**
   * The default direction to sort the list (ascending vs. descending)
   */
  defaultSortDirection?: string,

  /**
   * Callback supplied by the <code>DataList</code> higher-order component which can be used to initialize the list
   */
  onInit?: (page?: number) => void,

  /**
   * Callback supplied by the <code>DataList</code> higher-order component which can be used to sort the list
   */
  onSort?: (sortColumn: string, sortDirection: string, page?: number) => void,

  /**
   * Current sort column supplied by the <code>DataList</code> higher-order component
   */
  sortColumn?: string,

  /**
   * Current sort direction supplied by the <code>DataList</code> higher-order component
   */
  sortDirection?: string,

  /**
   * Customization props for the
   * <a target="_blank" href="https://react.semantic-ui.com/collections/table/"><code>Table</code></a>
   * component.
   */
  tableProps?: any
};

/**
 * The <code>ListTable</code> component renders a list which has the ability to load, save, and delete records from
 * an API (via the <code>DataList</code> higher-order component). This component will integrate seamlessly with a
 * back-end implementing the <code>resource-api</code>. See the
 * <a href="https://github.com/performant-software/resource-api">GitHub page</a> for more details.
 */
const ListTable = useDataList((props: Props) => {
  const prevColumns = Hooks.usePrevious(props.columns);

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
    if (!ObjectUtils.isEqual(props.columns, prevColumns)) {
      const {
        page,
        defaultSort,
        defaultSortDirection = SORT_ASCENDING
      } = props;

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
    }
  }, [props.columns]);

  return (
    <DataTable
      {...props}
      onColumnClick={onColumnClick.bind(this)}
    />
  );
});

ListTable.defaultProps = {
  ...DataTable.defaultProps,
  configurable: true,
  tableProps: {
    celled: true,
    sortable: true
  }
};

export default ListTable;
