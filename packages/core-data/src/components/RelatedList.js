// @flow

import React from 'react';
import _ from 'underscore';
import type { AnnotationPage } from '../types/AnnotationPage';

type Item = {
  id: string
};

type Props = {
  /**
   * An annotation page containing the list of records to render.
   */
  data: AnnotationPage<Item>,

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
 * This component is a helper component used to structure the lists for the other `Related*` comnponents.
 */
const RelatedList = (props: Props) => {
  const { items } = props.data;

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
