// @flow

import React from 'react';
import i18n from '../i18n/i18n';
import Icon from './Icon';

type Props = {
  /**
   * Icon to show in the header
   */
  headerIcon?: string,

  /**
   * Icon to show next to each item in the list
   */
  itemIcon?: string,

  /**
   * An array of items.
   */
  items: Array<any>,

  /**
   * Label to show at the top of the list
   */
  label?: string,

  /**
   * Callback fired when a record is clicked.
   */
  onClick: (item: any) => void,

  /**
   * Callback fired when the close button is clicked.
   */
  onClose: () => void,

  /**
   * Callback to get an item's name for the list.
   */
  renderItemName: (item: any) => string,

  /**
   * Title of the parent record.
   */
  title: string
};

const SelectRecordPanel = (props: Props) => (
  <div className='h-full bg-white'>
    <div className='flex items-center gap-2 w-full p-6'>
      {props.headerIcon && (
        <Icon
          name={props.headerIcon}
          size={24}
        />
      )}
      <p className='font-bold text-xl grow'>{props.title}</p>
      <button
        aria-label={i18n.t('Common.words.close')}
        className='flex items-center justify-center rounded-full hover:brightness-50 p-2'
        onClick={props.onClose}
        type='button'
      >
        <Icon
          name='close'
          size={24}
        />
      </button>
    </div>
    {props.label && (
      <p className='font-bold pt-2 pb-4 px-6 border-b text-lg'>
        {props.label}
      </p>
    )}
    <ul className='w-full h-full divide-y divide-solid'>
      {props.items.map((item, idx) => (
        <li
          className='hover:bg-neutral-100 w-full'
          key={idx}
        >
          <button
            className='flex items-center gap-2 py-2 px-6 w-full min-h-[50px]'
            onClick={() => props.onClick(item)}
            type='button'
          >
            <Icon
              name={props.itemIcon || 'bullet'}
              size={14}
            />
            <span
              className='font-semibold text-left text-sm'
            >
              {props.renderItemName(item)}
            </span>
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default SelectRecordPanel;
