// @flow

import React, { useMemo } from 'react';
import * as Dropdown from '@radix-ui/react-dropdown-menu';
import Icon from './Icon';
import i18n from '../i18n/i18n';

type Option = {
  label: string,
  value: string
}

type Props = {
  /**
   * Callback fired when the dropdown selection changes.
   */
  onChange: (val: string) => any,
  /**
   * Columns to display in the table.
   */
  options: Array<Option>,
  /**
   * (Optional) Placeholder text to show when no
   * value is selected.
   */
  placeholder?: string,
  /**
   * (Optional) Controlled value of the dropdown.
   */
  value?: string
}

const SearchResultsTable = (props: Props) => {
  const value = useMemo(
    () => props.options.find((opt) => opt.value === props.value),
    [props.options, props.value]
  );

  return (
    <Dropdown.Root>
      <Dropdown.Trigger asChild>
        <button
          className='flex items-center justify-center gap-1 h-9 pr-2 pl-3 rounded-[5px] bg-white'
          type='button'
        >
          {value
            ? <span className='grow text-left justify-self-start'>{value.label}</span>
            : <span className='grow text-left justify-self-start text-neutral-500'>{props.placeholder || i18n.t('Dropdown.select')}</span>}
          <Icon name='down' />
        </button>
      </Dropdown.Trigger>
      <Dropdown.Portal>
        <Dropdown.Content
          className='bg-white shadow-md'
        >
          {props.options.map((opt) => (
            <Dropdown.Item
              className='p-2 cursor-pointer hover:bg-neutral-200'
              onSelect={() => props.onChange(opt.value)}
            >
              {opt.label}
            </Dropdown.Item>
          ))}
        </Dropdown.Content>
      </Dropdown.Portal>
    </Dropdown.Root>
  );
};

export default SearchResultsTable;
