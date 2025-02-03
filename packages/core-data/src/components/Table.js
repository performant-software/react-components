// @flow

import React, { type Element } from 'react';

type Column = {
  label?: string,
  name: string,
  render?: (item: any) => Element<any>
}

type Props = {
  columns: Array<Column>,
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
