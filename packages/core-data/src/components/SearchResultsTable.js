// @flow

import React, { useEffect, useMemo } from 'react';
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
   * Hits to show on each page
   */
  hitsPerPage: number,

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

const SearchResultsTable = (props: Props) => {
  useEffect(() => {
    props.onChangePage(1);
  }, [props.hitsPerPage]);

  const hitsToShow = useMemo(() => {
    const first = (props.hitsPerPage * (props.page - 1)) + 1;
    const last = Math.min(first + props.hitsPerPage, props.hits.length) - 1;

    return props.hits.slice(first, last + 1);
  }, [props.hitsPerPage, props.hits, props.page]);

  return (
    <div className='rounded-md inline-block border border-neutral-200 w-full h-full min-h-full flex flex-col'>
      <div className='overflow-auto'>
        <table className='divide-y divide-neutral-200 w-full max-h-full overflow-auto border-b border-neutral-200 grow-0'>
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
                className='divide-x divide-neutral-200'
                key={idx}
              >
                {props.columns.map((col) => (
                  <td
                    className='px-4 py-3 text-sm whitespace-nowrap text-gray-800 text-sm max-h-10'
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
        {...props}
        className='sticky bottom-0 grow-0 w-full min-w-full'
        nbHits={props.hits.length}
      />
    </div>
  );
};

export default SearchResultsTable;
