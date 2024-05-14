// @flow

import React, { useCallback, useEffect, useMemo } from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';
import _ from 'underscore';
import i18n from '../i18n/i18n';
import Items, { type ItemsProps } from './Items';
import useDataList, { SORT_ASCENDING, type Props as DataListProps } from './DataList';

type Sort = {
  key: any,
  value: any,
  text: string,
  direction: ?string
};

type Props = DataListProps & ItemsProps & {
  /**
   * If `true`, a dimmer will be displayed over the list component.
   */
  dimmable?: boolean,

  /**
   * Callback fired when the sort dropdown is changed. This prop is provided by the <code>DataList</code>
   * higher-order component.
   */
  onSort: (column: string, direction: ?string, page?: number) => void,

  /**
   * An array of sort attributes to apply to the list. The values provided will display in a dropdown in the
   * list header.
   */
  sort?: Array<Sort>,

  /**
   * Name of the current sort column.
   */
  sortColumn?: string,

  /**
   * Current sort direction (ascending or descending).
   */
  sortDirection?: string
};

/**
 * An <code>ItemList</code> component can be used to render a list of records returned from an API. Under the
 * hood, the <code>DataList</code> component handles calling the API, storing the records, filters, etc, and
 * the <code>Items</code> component handles the presentation.
 */
const ItemList = useDataList((props: Props) => {
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
        active={props.dimmable && props.loading}
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
});

ItemList.defaultProps = {
  dimmable: true,
  filters: {},
  searchable: true,
};

export default ItemList;
