// @flow

import { AnnotationPage } from '@peripleo/peripleo';
import React from 'react';
import _ from 'underscore';

type Item = {
  id: string
};

type Props = {
  data: AnnotationPage<Item>,
  emptyMessage?: string,
  renderItem: (item: Item) => JSX.Element
};

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
