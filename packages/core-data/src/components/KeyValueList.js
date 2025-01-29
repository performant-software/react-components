// @flow

import React from 'react';
import _ from 'underscore';

type Item = {
  label: string,
  value: string
};

type Props = {
  items: Array<Item>
};

const KeyValueList = (props: Props) => (
  <ol
    className='text-sm mt-4 leading-6 overflow-hidden'
  >
    { _.map(props.items, ({ label, value }) => (
      <li
        key={label}
        className='mb-2'
      >
        <div
          className='text-muted'
        >
          { label }
        </div>
        <div
          className='font-medium overflow-hidden text-ellipsis'
        >
          { value }
        </div>
      </li>
    ))}
  </ol>
);

export default KeyValueList;
