// @flow

import React from 'react';
import _ from 'underscore';
import type { Source as SourceType } from '../types/Source';
import LoadAnimation from './LoadAnimation';
import { useLoader } from '../hooks/CoreData';

type Props = {
  /**
   * Name of the class(es) to apply to the `ul` element.
   */
  className?: string,

  /**
   * Callback fired when a source in the list is clicked.
   */
  onClick: (source: SourceType) => void,

  /**
   * Callback fired on mount to load the list of items.
   */
  onLoad: () => Promise<any>,

  /**
   * Function used to render the description element.
   */
  renderDescription?: (source: SourceType) => JSX.Element,

  /**
   * Function used to render the header element.
   */
  renderHeader?: (source: SourceType) => JSX.Element,

  /**
   * Function used to render the image element.
   */
  renderImage?: (source: SourceType) => JSX.Element,

  /**
   * Type of the source being fetched.
   */
  sourceType: 'instances' | 'items' | 'works'
};

/**
 * This component render a list of related items.
 */
const RelatedSources = (props: Props) => {
  const { data = {}, loading } = useLoader(props.onLoad, []);

  if (loading) {
    return (
      <LoadAnimation />
    );
  }

  return (
    <ul
      className={props.className}
    >
      { _.map(data[props.sourceType], (item) => (
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
                <h2
                  className='py-0.5 font-semibold text-lg'
                >
                  { item.primary_name?.name?.name }
                </h2>
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

export default RelatedSources;
