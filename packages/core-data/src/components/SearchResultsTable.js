// @flow

import clsx from 'clsx';
import React, { useMemo, useState } from 'react';
import Pagination from './Pagination';

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
  columns: Array<Column>,
  /**
   * Array of search hit objects.
   */
  hits: Array<any>,
  /**
   * Callback that fires when a row is clicked
   */
  onRowClick?: (hit: any) => void,
  /**
    * Callback that fires when the pointer begins to hover over a row
    */
  onRowPointerEnter?: (hit: any) => void,
  /**
    * Callback that fires when the pointer stops hovering over a row
    */
  onRowPointerLeave?: (hit: any) => void
}

const SearchResultsTable = (props: Props) => {
  /**
   * Which page of the results we're currently displaying
   */
  const [page, setPage] = useState(1);

  /**
   * Number of hits to show on each page
   */
  const [hitsPerPage, setHitsPerPage] = useState(10);

  /**
   * Calculate which hits to display with the current settings
   */
  const hitsToShow = useMemo(() => {
    const first = (hitsPerPage * (page - 1));
    const last = Math.min(first + hitsPerPage, props.hits.length) - 1;

    return props.hits.slice(first, last + 1);
  }, [hitsPerPage, props.hits, page]);

  /**
   * Reset to the first page when the hits per page changes
   */
  const onChangeHitsPerPage = (num: number) => {
    setPage(1);
    setHitsPerPage(num);
  };

  return (
    <div className='rounded-md inline-block border border-neutral-200 w-full h-full min-h-full flex flex-col'>
      <div className='overflow-auto'>
        <table
          className='divide-y divide-neutral-200 w-full max-h-full overflow-auto border-b border-neutral-200 grow-0'
          tabIndex={0}
        >
          <thead className='bg-neutral-100 sticky top-0'>
            <tr className='divide-x divide-neutral-200'>
              {props.columns.map((col) => (
                <th
                  className='px-4 py-3 text-left text-sm font-bold text-gray-800 max-h-10'
                  key={col.name}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className='divide-y divide-neutral-200 border-b border-neutral-200'>
            {hitsToShow.map((hit, idx) => (
              <tr
                className={clsx(
                  'divide-x divide-neutral-200',
                  { 'hover:bg-neutral-200 cursor-pointer': props.onRowClick }
                )}
                onClick={props.onRowClick
                  ? () => props.onRowClick(hit)
                  : undefined}
                onPointerEnter={props.onRowPointerEnter
                  ? () => props.onRowPointerEnter(hit)
                  : undefined}
                onPointerLeave={props.onRowPointerLeave
                  ? () => props.onRowPointerLeave(hit)
                  : undefined}
                key={idx}
              >
                {props.columns.map((col) => (
                  <td
                    className='px-4 py-3 text-sm text-gray-800 text-sm max-h-10'
                    key={col.name}
                  >
                    {col.render
                      ? col.render(hit)
                      : hit[col.name]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* this empty div keeps the Pagination bar at the bottom, even
          when there aren't enough results to fill the table */}
      <div className='grow' />
      <Pagination
        className='sticky bottom-0 grow-0 w-full min-w-full'
        nbHits={props.hits.length}
        onChangeHitsPerPage={onChangeHitsPerPage}
        page={page}
        onChangePage={setPage}
        hitsPerPage={hitsPerPage}
      />
    </div>
  );
};

export default SearchResultsTable;
