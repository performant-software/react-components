// @flow

import React, { useCallback, useState } from 'react';
import * as Popover from '@radix-ui/react-popover';
import clsx from 'clsx';
import Icon from './Icon';
import i18n from '../i18n/i18n';

type Option = {
  label: string,
  value: string
}

type ComboboxValueProps = {
  onClick: (option: Option) => void,
  value: Option
}

const ComboboxValue = (props: ComboboxValueProps) => (
  <button
    className='flex gap-2 items-center text-xs bg-neutral-200 px-2 py-1 rounded-[5px]'
    onClick={props.onClick}
    type='button'
  >
    <span
      className='text-left'
    >
      {props.value.label}
    </span>
    <Icon name='close' size={10} />
  </button>
);

type Props = {
  /**
   * (Optional) class name to apply to the root element.
   */
  className?: string,
  /**
   * (Optional) Name of the icon to show above the combobox.
   */
  icon?: string,
  /**
   * (Optional) Label to show above the combobox.
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
   * Callback fired when the user searches.
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
  const [search, setSearch] = useState('');

  const isSelected = useCallback((option: Option) => (
    props.values.some((opt) => opt.value === option.value)
  ), [props.values]);

  const onSearch = useCallback((query: string) => {
    setSearch(query);
    setOpen(true);
    props.onSearch(query);
  }, [props.onSearch]);

  return (
    <div
      className={clsx('flex flex-col w-full gap-3', props.className)}
    >
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
        <Popover.Anchor
          asChild
        >
          <div
            className={`
              flex 
              items-center 
              justify-center 
              gap-1 
              pr-2 
              pl-0.5 
              rounded-[5px] 
              w-full 
              bg-white 
              min-h-10 
              border 
              focus-within:border-primary
            `}
          >
            <div className='grow flex gap-1 flex-wrap p-2'>
              {props.values.map((value) => (
                <ComboboxValue
                  onClick={() => props.onChange(value)}
                  value={value}
                />
              ))}
              <input
                className='focus:outline-none w-full'
                placeholder={props.values.length === 0
                  ? props.placeholder || i18n.t('Combobox.select')
                  : undefined}
                onChange={(e) => onSearch(e.target.value)}
                value={search}
              />
            </div>
            <div className='flex h-full'>
              {props.onClear && props.values.length > 0 && (
                <button
                  aria-label={i18n.t('Combobox.clearValues')}
                  className='flex items-center justify-center rounded-full h-8 w-8'
                  onClick={props.onClear}
                  type='button'
                >
                  <Icon
                    name='close'
                  />
                </button>
              )}
              <button
                aria-label={open
                  ? i18n.t('Combobox.collapse')
                  : i18n.t('Combobox.expand')}
                className='flex items-center justify-center h-8 w-8 rounded-full'
                onClick={() => setOpen(!open)}
                type='button'
              >
                <Icon
                  name='down'
                />
              </button>
            </div>
          </div>
        </Popover.Anchor>
        <Popover.Portal>
          <Popover.Content
            className='bg-white shadow-md radix-combobox-content max-h-[200px] overflow-y-auto text-sm'
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
                    ? 'checkbox_filled'
                    : 'checkbox'}
                />
                <span
                  className='truncate'
                  title={option.label}
                >
                  {option.label}
                </span>
              </button>
            ))}
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
};

export default Combobox;
