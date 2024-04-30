// @flow

import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import _ from 'underscore';
import LoadAnimation from './LoadAnimation';
import { useLoader } from '../hooks/CoreData';

type Item = {
  id: string
};

type Props = {
  /**
   * Name of the class(es) to apply to the <ul> element.
   */
  className?: string,

  /**
   * Name of the collection that stores the items to display.
   */
  collectionName: string,

  /**
   * Number of items to display in each row of the grid.
   */
  itemsPerRow?: number,

  /**
   * Callback fired when the component is mounted to fetch the data.
   */
  onLoad: () => any,

  /**
   * A message to display when the list is empty.
   */
  emptyMessage: string,

  /**
   * The label to display on the "Show More" button.
   */
  moreLabel: string,

  /**
   * Render function used to determine how to present the passed item.
   */
  renderItem: (item: Item) => JSX.Element
};

/**
 * This component is a helper component used to structure the lists for the other `Related*` components.
 */
const RelatedList = (props: Props) => {
  const [items, setItems] = useState([]);

  const {
    data,
    loading,
    isNextDisabled,
    onNext,
    pages
  } = useLoader(props.onLoad);

  /**
   * Append the new items to the list.
   */
  useEffect(() => {
    if (data) {
      setItems((prevItems) => [...prevItems, ...data[props.collectionName]]);
    }
  }, [data, props.collectionName]);

  if (loading) {
    return (
      <LoadAnimation />
    );
  }

  if (_.isEmpty(items)) {
    return (
      <div
        className='pt-6 pl-3 pr-6 pb-8 flex items-center justify-center text-muted/60 italic'
      >
        { props.emptyMessage }
      </div>
    );
  }

  return (
    <div>
      <ul
        className={clsx(
          'grid',
          'gap-2',
          { 'grid-cols-1': props.itemsPerRow === 1 },
          { 'grid-cols-2': props.itemsPerRow === 2 },
          { 'grid-cols-3': props.itemsPerRow === 3 },
          { 'grid-cols-4': props.itemsPerRow === 4 },
          { 'grid-cols-5': props.itemsPerRow === 5 },
          { 'grid-cols-6': props.itemsPerRow === 6 },
          props.className
        )}
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
      { pages > 1 && !isNextDisabled && (
        <button
          className={clsx(
            'py-2',
            'px-3',
            'mt-2',
            { 'disable:pointer-events-none': isNextDisabled }
          )}
          disabled={isNextDisabled}
          onClick={onNext}
          type='button'
        >
          { props.moreLabel }
        </button>
      )}
    </div>

  );
};

RelatedList.defaultProps = {
  itemsPerRow: 1
};

export default RelatedList;
