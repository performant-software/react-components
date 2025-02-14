// @flow

import React from 'react';
import * as Dropdown from '@radix-ui/react-dropdown-menu';
import Icon from './Icon';

const HITS_PER_PAGE_OPTIONS = {
  items: [
    {
      label: '10',
      value: 10,
      default: true
    },
    {
      label: '20',
      value: 20,
    },
    {
      label: '50',
      value: 50,
    },
    {
      label: '100',
      value: 100,
    },
  ]
};

type Props = {
  /**
   * Current hits per page setting
   */
  hitsPerPage: number,
  /**
   * Callback fired when the user changes the hits per page setting
   */
  onChange: (num: number) => void
}

const HitsPerPage = (props: Props) => (
  <Dropdown.Root>
    <Dropdown.Trigger asChild>
      <button
        className='flex items-center p-2'
        type='button'
      >
        <span>{props.hitsPerPage}</span>
        <Icon name='down' />
      </button>
    </Dropdown.Trigger>
    <Dropdown.Portal>
      <Dropdown.Content
        className='bg-white shadow-md'
      >
        {HITS_PER_PAGE_OPTIONS.items.map((opt) => (
          <Dropdown.Item
            className='p-2 cursor-pointer hover:bg-neutral-200'
            key={opt.value}
            onSelect={() => props.onChange(opt.value)}
          >
            {opt.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Content>
    </Dropdown.Portal>
  </Dropdown.Root>
);

export default HitsPerPage;
