// @flow

import React, { useCallback, type ComponentType } from 'react';
import _ from 'underscore';

type Props = {
  items: Array<any>,
  onChange: (items: Array<any>) => void
};

const withBatchEdit = (WrappedComponent: ComponentType<any>): any => (props: Props) => {
  /**
   * Adds a new item to the list.
   *
   * @type {(function(): void)|*}
   */
  const onAddItem = useCallback(() => {
    props.onChange([...props.items, {}]);
  }, [props.items]);

  /**
   * Removes the item at the passed index from the list.
   *
   * @type {(function(*): void)|*}
   */
  const onRemoveItem = useCallback((findIndex) => {
    props.onChange(_.reject(props.items, (item, index) => index === findIndex));
  }, [props.items]);

  /**
   * Updates the passed attribute of the item at the passed index.
   *
   * @type {(function(number, string, ?Event, {value: *}): void)|*}
   */
  const onUpdateItem = useCallback((findIndex: number, attribute: string, e: ?Event, { value }) => {
    props.onChange(_.map(props.items, (item, index) => (
      index !== findIndex ? item : ({ ...item, [attribute]: value })
    )));
  }, [props.items]);

  return (
    <WrappedComponent
      {...props}
      onAddItem={onAddItem}
      onRemoveItem={onRemoveItem}
      onUpdateItem={onUpdateItem}
    />
  );
};

export default withBatchEdit;

export type BatchEditProps = {
  onAddItem: () => void,
  onRemoveItem: (index: number) => void,
  onUpdateItem: (index: number, attribute: string, e: Event, data: any) => void
};
