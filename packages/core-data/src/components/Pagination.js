// @flow

import React from 'react';
import {
  ChevronLeftIcon,
  ChevronRightIcon
} from '@radix-ui/react-icons';
import clsx from 'clsx';
import HitsPerPage from './HitsPerPage';
import i18n from '../i18n/i18n';

type Props = {
  /**
   * (Optional) Class name to append to the list of the Pagination container
   */
  className?: string,

  /**
   * Hits to show on each page
   */
  hitsPerPage: number,

  /**
   * Total number of hits
   */
  nbHits: number,

  /**
   * Callback that runs when the hits per page setting is changed
   */
  onChangeHitsPerPage: (num: number) => void,

  /**
   * Callback that runs when the page is changed
   */
  onChangePage: (num: number) => void,

  /**
   * The current page
   */
  page: number
}

const Pagination = (props: Props) => {
  /**
   * The position of the first item in the visible results list.
   */
  const firstItemPosition = (props.page * props.hitsPerPage) + 1;

  /**
   * The position of the last item in the visible results list.
   */
  const lastItemPosition = firstItemPosition + (props.hitsPerPage % (props.nbHits - (props.hitsPerPage * props.page))) - 1;

  /**
   * Whether the user can go forward to the next page.
   */
  const canGoForward = (firstItemPosition + props.hitsPerPage) < props.nbHits;

  /**
   * Whether the user can go back to the previous page.
   */
  const canGoBack = firstItemPosition > props.hitsPerPage;

  /**
   * Requests the next page of results.
   */
  const onNextPage = () => props.onChangePage(props.page + 1);

  /**
   * Requests the previous page of results.
   */
  const onPreviousPage = () => props.onChangePage(props.page - 1);

  return (
    <div className={clsx(
      'w-full',
      'h-10',
      'bg-white',
      'flex',
      'justify-end',
      'items-center',
      'gap-4',
      'text-sm',
      'px-4',
      props.className
    )}
    >
      <span className='font-bold'>
        {i18n.t('SearchResultsTable.rowsPerPage')}
      </span>
      <HitsPerPage
        hitsPerPage={props.hitsPerPage}
        onChange={props.onChangeHitsPerPage}
      />
      <span>
        {firstItemPosition}
        -
        {lastItemPosition}
        &nbsp;
        {i18n.t('Common.words.of')}
        &nbsp;
        {props.nbHits}
      </span>
      <button
        className={clsx(
          'h-6',
          'w-6',
          'rounded-full',
          'flex',
          'items-center',
          'justify-center',
          { 'text-gray-300': !canGoBack }
        )}
        disabled={!canGoBack}
        onClick={onPreviousPage}
        type='button'
      >
        <ChevronLeftIcon />
      </button>
      <button
        className={clsx(
          'h-6',
          'w-6',
          'rounded-full',
          'flex',
          'items-center',
          'justify-center',
          { 'text-gray-300': !canGoForward }
        )}
        disabled={!canGoForward}
        onClick={onNextPage}
        type='button'
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
};

export default Pagination;
