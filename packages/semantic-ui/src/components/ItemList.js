// @flow

import React, { useCallback, useEffect, useMemo } from 'react';
import { Button, Dimmer, Loader } from 'semantic-ui-react';
import _ from 'underscore';
import i18n from '../i18n/i18n';
import Items from './Items';
import useDataList, { SORT_ASCENDING } from './DataList';

type ListButton = {
  ...typeof Button,
  accept: () => boolean
};

type Sort = {
  key: any,
  value: any,
  text: string,
  direction: ?string
};

type Props = {
  buttons: Array<ListButton>,
  isRowSelected: (item: any) => boolean,
  items: Array<any>,
  loading?: boolean,
  page: number,
  onRowSelect: (item: any) => void,
  onSort: (column: string, direction: ?string, page?: number) => void,
  selectable?: boolean,
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

  /**
   * Sets the variable to true if every item in the passed collection is selected.
   */
  const allSelected = useMemo(() => props.isRowSelected && props.items && props.items.length && _.every(
    props.items,
    props.isRowSelected.bind(this)
  ), [props.items, props.isRowSelected]);

  /**
   * Selects all items in the collection. If all items are currently selected, deselects all items.
   *
   * @type {(function(): void)|*}
   */
  const onSelectAll = useCallback(() => {
    if (props.items && props.isRowSelected && props.onRowSelect) {
      let items;

      if (allSelected) {
        items = [...props.items];
      } else {
        items = _.reject(props.items, props.isRowSelected.bind(this));
      }

      _.each(items, props.onRowSelect.bind(this));
    }
  }, [allSelected, props.isRowSelected, props.items, props.onRowSelect]);

  return (
    <>
      <Dimmer
        active={props.loading}
        inverted
      >
        <Loader
          content={i18n.t('Common.messages.loading')}
        />
      </Dimmer>
      <Items
        {...props}
        buttons={[...(props.buttons || []), {
          accept: () => props.selectable,
          color: 'green',
          content: allSelected ? i18n.t('ItemList.buttons.deselectAll') : i18n.t('ItemList.buttons.selectAll'),
          icon: 'checkmark',
          onClick: onSelectAll.bind(this)
        }]}
      />
    </>
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
