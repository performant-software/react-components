// @flow

import React from 'react';
import _ from 'underscore';
import type { Item as ItemType } from '../types/Item';
import LoadAnimation from './LoadAnimation';
import { useLoader } from '../hooks/CoreData';

type Props = {
  /**
   * Name of the class(es) to apply to the `ul` element.
   */
  className?: string,

  /**
   * Callback fired when an item in the list is clicked.
   */
  onClick: (item: ItemType) => void,

  /**
   * Callback fired on mount to load the list of items.
   */
  onLoad: () => Promise<any>,

  /**
   * Function used to render the description element.
   */
  renderDescription?: (item: ItemType) => JSX.Element,

  /**
   * Function used to render the header element.
   */
  renderHeader?: (item: ItemType) => JSX.Element,

  /**
   * Function used to render the image element.
   */
  renderImage?: (item: ItemType) => JSX.Element
};

/**
 * This component render a list of related items.
 */
const RelatedItems = (props: Props) => {
  const { data: { items } = {}, loading } = useLoader(props.onLoad, []);

  if (loading) {
    return (
      <LoadAnimation />
    );
  }

  return (
    <ul
      className={props.className}
    >
      { _.map(items, (item) => (
        <li>
          <div
            className='min-h-[5.5em] flex flex-col justify-start'
          >
            <button
              className='my-0.5 flex-grow text-left inline-flex rounded-none bg-gray-100'
              onClick={() => props.onClick(item)}
              type='button'
            >
              { props.renderImage && (
                <div
                  className='w-[160px] h-[120px]'
                >
                  { props.renderImage(item) }
                </div>
              )}
              <div
                className='py-3 px-5 flex-grow'
              >
                { props.renderHeader && (
                  <div
                    className='py-0.5 font-semibold uppercase text-sm'
                  >
                    { props.renderHeader(item) }
                  </div>
                )}
                <h4
                  className='py-0.5 font-semibold text-lg'
                >
                  { item.primary_name?.name?.name }
                </h4>
                { props.renderDescription && (
                  <div
                    className='py-0.5 font-light text-sm'
                  >
                    { props.renderDescription(item) }
                  </div>
                )}
              </div>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default RelatedItems;
