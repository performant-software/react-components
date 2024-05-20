// @flow

import React from 'react';
import _ from 'underscore';
import type { Work as WorkType } from '../types/Work';
import LoadAnimation from './LoadAnimation';
import { useLoader } from '../hooks/CoreData';

type Props = {
  /**
   * Name of the class(es) to apply to the `ul` element.
   */
  className?: string,

  /**
   * Callback fired when an work in the list is clicked.
   */
  onClick: (work: WorkType) => void,

  /**
   * Callback fired on mount to load the list of works.
   */
  onLoad: () => Promise<any>,

  /**
   * Function used to render the description element.
   */
  renderDescription?: (work: WorkType) => JSX.Element,

  /**
   * Function used to render the header element.
   */
  renderHeader?: (work: WorkType) => JSX.Element,

  /**
   * Function used to render the image element.
   */
  renderImage?: (work: WorkType) => JSX.Element
};

/**
 * This component render a list of related works.
 */
const RelatedWorks = (props: Props) => {
  const { data: { works } = {}, loading } = useLoader(props.onLoad, []);

  if (loading) {
    return (
      <LoadAnimation />
    );
  }

  return (
    <ul
      className={props.className}
    >
      { _.map(works, (work) => (
        <li>
          <div
            className='min-h-[5.5em] flex flex-col justify-start'
          >
            <button
              className='my-0.5 flex-grow text-left inline-flex rounded-none bg-gray-100'
              onClick={() => props.onClick(work)}
              type='button'
            >
              { props.renderImage && (
                <div
                  className='w-[160px] h-[120px]'
                >
                  { props.renderImage(work) }
                </div>
              )}
              <div
                className='py-3 px-5 flex-grow'
              >
                { props.renderHeader && (
                  <div
                    className='py-0.5 font-semibold uppercase text-sm'
                  >
                    { props.renderHeader(work) }
                  </div>
                )}
                <h2
                  className='py-0.5 font-semibold text-lg'
                >
                  { work.primary_name?.name?.name }
                </h2>
                { props.renderDescription && (
                  <div
                    className='py-0.5 font-light text-sm'
                  >
                    { props.renderDescription(work) }
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

export default RelatedWorks;
