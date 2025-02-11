// @flow

import React from 'react';
import { type Attribute } from '../types/SearchList';
import SearchListItem from './SearchListItem';
import i18n from '../i18n/i18n';

type Props = {
  /**
   * Attributes to display (only the first three will be shown)
   */
  attributes: Attribute[],
  /**
   * Array of search result items
   */
  items: Array<any>
};

const SearchList = (props: Props) => (
  <div className='h-full'>
    <div className='text-sm italic bg-white sticky top-0 py-2.5 px-6 shadow-sm'>
      {props.items.length}
        &nbsp;
      {i18n.t('Common.words.results')}
    </div>
    <ul className='overflow-y-auto h-full divide-y divide-solid'>
      {props.items.map((item, idx) => (
        <SearchListItem
          key={idx}
          title={item.name}
          attributes={props.attributes}
          item={item}
        />
      ))}
    </ul>
  </div>
);

export default SearchList;
