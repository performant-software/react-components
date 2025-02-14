// @flow

import React from 'react';
import clsx from 'clsx';
import { type Attribute } from '../types/SearchList';
import SearchListItem from './SearchListItem';
import i18n from '../i18n/i18n';

type Props = {
  /**
   * Attributes to display (only the first three will be shown)
   */
  attributes?: Attribute[],
  /**
   * Class name to apply to the root button element.
   */
  className?: string,
  /**
   * Array of search result items
   */
  items: Array<any>,
  /**
   * Field name or callback function to return the title of an item
   */
  itemTitle: string | (item: any) => string,
  /**
   * Callback that fires when an item is clicked
   */
  onItemClick?: (item: any) => void,
  /**
   * Callback that fires when the pointer begins to hover over an item
   */
  onItemPointerEnter?: (item: any) => void,
  /**
   * Callback that fires when the pointer stops hovering over an item
   */
  onItemPointerLeave?: (item: any) => void
};

const SearchList = (props: Props) => (
  <div className={clsx(
    'h-full flex flex-col',
    props.className
  )}
  >
    <div className='text-sm italic bg-white sticky top-0 py-2.5 px-6 shadow-sm'>
      {props.items.length}
        &nbsp;
      {props.items.length === 1
        ? i18n.t('Common.words.result')
        : i18n.t('Common.words.results') }
    </div>
    <ul className='overflow-y-auto h-full divide-y divide-solid divide-neutral-200'>
      {props.items.map((item, idx) => (
        <SearchListItem
          attributes={props.attributes}
          key={idx}
          item={item}
          title={typeof props.itemTitle === 'string' ? item[props.itemTitle] : props.itemTitle(item)}
          onClick={props.onItemClick}
          onPointerEnter={() => props.onItemPointerEnter(item)}
          onPointerLeave={() => props.onItemPointerLeave(item)}
        />
      ))}
    </ul>
  </div>
);

export default SearchList;
