// @flow

import React from 'react';
import Icon from './Icon';
import { type Attribute } from '../types/SearchList';

type Props = {
  /**
   * Title of the record
   */
  title: string,
  /**
   * Attributes to display
   */
  attributes: Attribute[],
  /**
   * Search item object
   */
  item: any
};

const ListItem = (props: Props) => (
  <li className='py-3 px-6'>
    <p className='font-bold text-neutral-800'>{props.title}</p>
    {props.attributes.length > 0 && (
      <ul className='list-none'>
        {props.attributes.map((att) => (
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
);

export default ListItem;
