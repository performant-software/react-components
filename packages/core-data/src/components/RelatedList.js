// @flow

import React from 'react';
import _ from 'underscore';
import { useLoader } from '../hooks/CoreData';
import LoadAnimation from './LoadAnimation';

type Item = {
  id: string
};

type Props = {
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

  if (loading) {
    return (
      <LoadAnimation />
    );
  }

  if (_.isEmpty(data?.items)) {
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
      { _.map(data?.items, (item) => (
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
