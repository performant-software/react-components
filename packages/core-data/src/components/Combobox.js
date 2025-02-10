// @flow

import React, { useCallback, useState } from 'react';
import * as Popover from '@radix-ui/react-popover';
import Icon from './Icon';
import Input from './Input';
import i18n from '../i18n/i18n';
import './Combobox.css';

type Option = {
  label: string,
  value: string
}

type ComboboxValueProps = {
  value: Option,
  onClick: (option: Option) => void
}

const ComboboxValue = (props: ComboboxValueProps) => (
  <button
    className='flex gap-2 items-center text-sm bg-neutral-200 px-1.5 py-0.5 rounded-[5px]'
    onClick={props.onClick}
    type='button'
  >
    {props.value.label}
    <Icon name='close' size={10} />
  </button>
);

type Props = {
  /**
   * (Optional) Name of the icon to show above the combobox
   */
  icon?: string,
  /**
   * (Optional) Label to show above the combobox
   */
  label?: string,
  /**
   * Callback fired when the combobox selection changes.
  */
  onChange: (val: string) => any,
 /**
  * Callback fired when the combobox selection is cleared.
  */
  onClear: (val: string) => any,
  /**
   * (Optional) Callback fired when the user searches.
   */
  onSearch: (val: string) => any,
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
   * Controlled value of the combobox.
   */
  values: Array<Option>
}

const Combobox = (props: Props) => {
  const [open, setOpen] = useState(false);

  const isSelected = (option: Option) => useCallback(
    props.values.some((opt) => opt.value === option.value),
    [props.values]
  );

  return (
    <div className='w-full flex flex-col gap-3 py-4'>
      {(props.icon || props.label) && (
      <div
        className='flex gap-2 items-center justify-center w-full'
      >
        {props.icon && (
          <Icon
            className='fill-neutral-800'
            name={props.icon}
            size={16}
          />
        )}
        {props.label && (
          <span
            className='text-neutral-800 grow font-semibold'
          >
            {props.label}
          </span>
        )}
      </div>
      )}
      <Popover.Root
        open={open}
      >
        <Popover.Trigger asChild>
          <div
            className='flex items-center justify-center gap-1 pr-2 pl-3 rounded-[5px] bg-white w-full min-h-10'
            onClick={() => setOpen(!open)}
            type='button'
          >
            <div className='grow flex gap-2 flex-wrap py-2'>
              {props.values.length === 0 && (
                <Input
                  
                />
                <span className='grow text-left justify-self-start text-neutral-500'>{props.placeholder || i18n.t('Dropdown.select')}</span>
              )}
              {props.values.map((value) => (
                <ComboboxValue
                  onClick={() => props.onChange(value)}
                  value={value}
                />
              ))}
            </div>
            <div className='flex gap-2'>
              {props.onClear && props.values.length > 0 && (
                <button
                  onClick={props.onClear}
                  type='button'
                >
                  <Icon
                    name='close'
                  />
                </button>
              )}
              <Icon
                name='down'
              />
            </div>
          </div>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            className='bg-white shadow-md w-full radix-dropdown-portal'
          >
            {props.options.map((option) => (
              <button
                className='p-2 cursor-pointer hover:bg-neutral-200 w-full flex gap-2 items-center'
                key={option.value}
                onClick={() => props.onChange(option)}
                type='button'
              >
                <Icon
                  name={isSelected(option)
                    ? 'checkbox-filled'
                    : 'checkbox'}
                />
                {option.label}
              </button>
            ))}
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
};

export default Combobox;
