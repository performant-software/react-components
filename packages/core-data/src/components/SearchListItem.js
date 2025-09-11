// @flow

import React, { type Element, useMemo } from 'react';
import clsx from 'clsx';
import Icon from './Icon';
import { type Attribute } from '../types/SearchList';
import Pill from './Pill';
import { ObjectJs } from '@performant-software/shared-components';

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
   * Boolean that determines whether to highlight the item
   */
  isHighlight?: boolean,

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
  title: string,

  /**
   * List of attributes that appear as pills on the top of the item
   */
  tags?: { name: string, primary?: boolean, secondary?: boolean }[]
};

type ItemWrapperProps = {
  children: Element<any>,
  ...SearchListItemProps
}

/**
 * Wraps the list item in a button element if an onClick
 * callback is provided.
 */
const ItemWrapper = (props: ItemWrapperProps) => {
  if (props.onClick) {
    return (
      <button
        className='w-full border-0 text-left hover:bg-transparent'
        onClick={() => props.onClick(props.item)}
        type='button'
      >
        {props.children}
      </button>
    );
  }

  return props.children;
};

const SearchListItem = (props: SearchListItemProps) => {
  const attributeValues = useMemo(() => props.attributes.slice(0, 3).map((attribute) => {
    if (attribute.render) {
      return attribute.render(props.item);
    }

    return props.item[attribute.name];
  }), [props.attributes, props.item]);

  const tags = useMemo(() => {
    const result = [];

    if (!props.tags) {
      return result;
    }

    props.tags.forEach(tag => {
      const value = ObjectJs.getNestedValue(props.item, tag.name);

      if (value) {
        result.push({
          value,
          primary: tag.primary,
          secondary: tag.secondary
        });
      }
    });

    return result;
  }, [props.tags, props.item]);

  return (
    <li
      className={clsx(
        { 'bg-primary/20': props.isHighlight },
        { 'hover:bg-primary/20': !!props.onClick }
      )}
    >
      <ItemWrapper {...props}>
        <div
          className='py-3 px-4'
          onPointerEnter={props.onPointerEnter
            ? () => props.onPointerEnter(props.item)
            : undefined}
          onPointerLeave={props.onPointerLeave
            ? () => props.onPointerLeave(props.item)
            : undefined}
        >
          {tags.length > 0 && (
            <div className='flex flex-wrap gap-2'>
              {tags.map((tag, idx) => (
                <Pill
                  primary={tag.primary}
                  secondary={tag.secondary}
                  label={tag.value}
                  key={idx}
                />
              ))}
            </div>
          )}
          <p className='font-bold text-neutral-800'>{props.title}</p>
          {props.attributes && attributeValues.some(Boolean) && (
            <ul className='list-none'>
              {props.attributes.slice(0, 3).map((att, idx) => (
                <React.Fragment key={att.name}>
                  {!!attributeValues[idx] && (
                    <li
                      className='text-sm text-neutral-800 flex gap-2 items-center list-none pl-5 pt-1'
                    >
                      <Icon
                        className='min-w-[13px]'
                        name={att.icon || 'bullet'}
                        size={13}
                      />
                      {attributeValues[idx]}
                    </li>
                  )}
                </React.Fragment>
              ))}
            </ul>
          )}
        </div>
      </ItemWrapper>
    </li>
  );
};

export default SearchListItem;
