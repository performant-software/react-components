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
import RowsPerPage from './RowsPerPage';
import i18n from '../i18n/i18n';

type Column = {
  /**
   * Label to use in the table header.
   */
  label?: string,
  /**
   * Name of the column. If no `render` prop is provided, the table will try to use item[name] to get the value.
   */
  name: string,
  /**
   * Function for fetching the display value from the item.
   * If this is provided, the component will put the result of this function
   * in the table cell instead of item[name].
   */
  render?: (item: any) => JSX.Element
}

type Props = {
  /**
   * Columns to display in the table.
   */
  columns: Array<Column>
}

const Pagination = () => {
  const refinePagination = usePagination().refine;
  const { results } = useInstantSearch();

  // const { hitsPerPage } = results;

  const firstItemIndex = (results.page * results.hitsPerPage) + 1;
  const lastItemIndex = firstItemIndex + results.hits.length - 1;

  const canGoForward = (firstItemIndex + results.hitsPerPage) < results.nbHits;
  const canGoBack = firstItemIndex > results.hitsPerPage;

  const onNextPage = () => refinePagination(results.page + 1);
  const onPreviousPage = () => refinePagination(results.page - 1);

  return (
    <div className='w-full h-10 bg-white flex justify-end items-center gap-4 text-sm px-4'>
      <span className='font-bold'>
        {i18n.t('SearchResultsTable.rowsPerPage')}
      </span>
      <RowsPerPage />
      <span>
        {firstItemIndex}
        -
        {lastItemIndex}
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

const SearchResultsTable = (props: Props) => {
  const { results } = useInstantSearch();

  return (
    <div className='rounded-md overflow-hidden inline-block border border-neutral-200 w-full'>
      <table className='divide-y divide-neutral-200 w-full border-b border-neutral-200'>
        <thead className='bg-neutral-100'>
          <tr className='divide-x divide-neutral-200'>
            {props.columns.map((col) => (
              <th className='px-4 py-3 text-left text-sm font-bold text-gray-800'>
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='divide-y divide-neutral-200 border-b border-neutral-200'>
          {results.hits.map((item, idx) => (
            <tr
              className='divide-x divide-neutral-200'
              key={idx}
            >
              {props.columns.map((col) => (
                <td className='px-4 py-3 text-sm whitespace-nowrap text-gray-800 text-sm'>
                  {col.render
                    ? col.render(item)
                    : item[col.name]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default SearchResultsTable;
