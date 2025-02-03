// @flow

import React from 'react';

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
   * List of TypeSense hits.
   */
  hits: Array<any>
}

const Table = (props: Props) => (
  <div className='rounded-md overflow-hidden inline-block border border-gray-200'>
    <table className='divide-y divide-gray-200'>
      <thead className='bg-gray-100'>
        <tr className='divide-x divide-gray-200'>
          {props.columns.map((col) => (
            <th
              className='px-3 py-3.5 text-left text-sm font-bold text-gray-800'
              key={col.name}
            >
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className='divide-y divide-gray-200'>
        {props.hits.map((item, idx) => (
          <tr
            className='divide-x divide-gray-200'
            key={idx}
          >
            {props.columns.map((col) => (
              <td className='px-3 py-4 text-sm whitespace-nowrap text-gray-800 text-sm'>
                {col.render
                  ? col.render(item)
                  : item[col.name]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Table;
