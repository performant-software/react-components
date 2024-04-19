// @flow

import React, { useMemo } from 'react';
import _ from 'underscore';
import LoadAnimation from './LoadAnimation';
import { useLoader } from '../hooks/CoreData';

type Item = {
  id: string
};

type Props = {
  /**
   * Name of the collection that stores the items to display.
   */
  collectionName: string,

  /**
   * Callback fired when the component is mounted to fetch the data.
   */
  onLoad: () => any,

  /**
   * A message to display when the list is empty.
   */
  emptyMessage: string,

  /**
   * Render function used to determine how to present the passed item.
   */
  renderItem: (item: Item) => JSX.Element
};

/**
 * This component is a helper component used to structure the lists for the other `Related*` components.
 */
const RelatedList = (props: Props) => {
  const { data, loading } = useLoader(props.onLoad, []);

  /**
   * Memo-izes the list of items.
   */
  const items = useMemo(() => data && data[props.collectionName], [data, props.collectionName]);

  if (loading) {
    return (
      <LoadAnimation />
    );
  }

  if (_.isEmpty(items)) {
    return (
      <div
        className='pt-6 pl-3 pr-6 pb-8 flex items-center justify-center text-muted/50 italic'
      >
        { props.emptyMessage }
      </div>
    );
  }

  return (
    <ul
      className='p-3 pt-1 pb-4'
    >
      { _.map(items, (item) => (
        <li
          key={item.id}
          className='flex items-center'
        >
          { props.renderItem(item) }
        </li>
      ))}
    </ul>
  );
};

export default RelatedList;
