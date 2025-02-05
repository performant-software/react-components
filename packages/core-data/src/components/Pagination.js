// @flow

import React from 'react';
import {
  useInstantSearch,
  usePagination
} from 'react-instantsearch';
import {
  ChevronLeftIcon,
  ChevronRightIcon
} from '@radix-ui/react-icons';
import clsx from 'clsx';
import HitsPerPage from './HitsPerPage';
import i18n from '../i18n/i18n';

const Pagination = () => {
  const { refine } = usePagination();
  const { results } = useInstantSearch();

  /**
   * The position of the first item in the visible results list.
   */
  const firstItemPosition = (results.page * results.hitsPerPage) + 1;

  /**
   * The position of the last item in the visible results list.
   */
  const lastItemPosition = firstItemPosition + results.hits.length - 1;

  /**
   * Whether the user can go forward to the next page.
   */
  const canGoForward = (firstItemPosition + results.hitsPerPage) < results.nbHits;

  /**
   * Whether the user can go back to the previous page.
   */
  const canGoBack = firstItemPosition > results.hitsPerPage;

  /**
   * Requests the next page of results.
   */
  const onNextPage = () => refine(results.page + 1);

  /**
   * Requests the previous page of results.
   */
  const onPreviousPage = () => refine(results.page - 1);

  return (
    <div className='w-full h-10 bg-white flex justify-end items-center gap-4 text-sm px-4'>
      <span className='font-bold'>
        {i18n.t('SearchResultsTable.rowsPerPage')}
      </span>
      <HitsPerPage />
      <span>
        {firstItemPosition}
        -
        {lastItemPosition}
        &nbsp;
        {i18n.t('Common.words.of')}
        &nbsp;
        {results.nbHits}
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
