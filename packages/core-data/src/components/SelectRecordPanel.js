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
   * Name of the related modal
   */
  modelName: string,

  /**
   * Callback fired when a record is clicked.
   */
  onClick: (item: any) => void,

  /**
   * Callback to get an item's name for the list.
   */
  renderItemName: (item: any) => string,

  /**
   * Title of the parent record.
   */
  title: string
};

/**
 * This component renders a list of search results returned from a Core Data Typesense index.
 */
const SearchResultsList = (props: Props) => (
  <div className='h-full bg-white'>
    <div className='flex items-center gap-2 w-full'>
      {props.headerIcon && (
        <Icon
          name={props.headerIcon}
          size={24}
        />
      )}
      <h2 className='font-bold text-xl'>{props.title}</h2>
    </div>
    <h2 className='font-bold'>
      {i18n.t('Common.words.Select')}
      &nbsp;
      {props.modelName}
    </h2>
    <ul className='w-full h-full'>
      {props.items.map((item) => (
        <li
          className='hover:brightness-50 w-full'
        >
          <button
            className='flex items-center gap-2 py-2 px-6'
            onClick={() => props.onClick(item)}
            type='button'
          >
            <Icon
              name={props.itemIcon || 'bullet'}
              size={24}
            />
            <span
              className='font-semibold'
            >
              {props.renderItemName(item)}
            </span>
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default SearchResultsList;
