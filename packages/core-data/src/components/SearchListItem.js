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
  item: any
};

const ListItem = (props: Props) => (
  <li>
    <p>{props.title}</p>
    {props.attributes.length > 0 && (
      <ul>
        {props.attributes.map((att) => (
          <li key={att.name}>
            <Icon name={att.icon || 'bullet'} />
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
