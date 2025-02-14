// @flow

import React, { type Element } from 'react';
import Icon from './Icon';
import { type Attribute } from '../types/SearchList';

type SearchListItemProps = {
  /**
   * Attributes to display (only the first three are shown)
   */
  attributes?: Attribute[],
  /**
   * Search item object
   */
  item: any,
  /**
   * Callback that fires when an item is clicked
   */
  onClick?: (item: any) => void,
  /**
   * Callback that fires when the pointer begins to hover over an item
   */
  onPointerEnter?: (item: any) => void,
  /**
   * Callback that fires when the pointer stops hovering over an item
   */
  onPointerLeave?: (item: any) => void,
  /**
   * Title of the record
   */
  title: string
};

type ItemWrapperProps = {
  children: Element<any>,
  ...Props
}

/**
 * Wraps the list item in a button element if an onClick
 * callback is provided.
 */
const ItemWrapper = (props: ItemWrapperProps) => {
  if (props.onClick) {
    return (
      <button
        className='w-full border-0 text-left'
        onClick={() => props.onClick(props.item)}
        type='button'
      >
        {props.children}
      </button>
    );
  }

  return props.children;
};

const SearchListItem = (props: SearchListItemProps) => (
  <ItemWrapper {...props}>
    <li
      className='py-3 px-6'
      onPointerEnter={props.onPointerEnter
        ? (item) => props.onPointerEnter(item)
        : undefined}
      onPointerLeave={props.onPointerLeave
        ? (item) => props.onPointerLeave(item)
        : undefined}
    >
      <p className='font-bold text-neutral-800'>{props.title}</p>
      {props.attributes && props.attributes.length > 0 && (
        <ul className='list-none'>
          {props.attributes.slice(0, 3).map((att) => (
            <li
              className='text-sm text-neutral-800 flex gap-2 items-center list-none pl-5 pt-1'
              key={att.name}
            >
              <Icon
                className='min-w-[13px]'
                name={att.icon || 'bullet'}
                size={13}
              />
              {att.render
                ? att.render(props.item)
                : props.item[att.name]}
            </li>
          ))}
        </ul>
      )}
    </li>
  </ItemWrapper>
);

export default SearchListItem;
