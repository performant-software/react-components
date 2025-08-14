import React from 'react'
import { findByType } from '../helpers/Element';
import clsx from 'clsx';

interface TableProps {
  classes?: {
    container?: string,
    header?: string,
    table?: string
  }
  label?: string
}

interface ChildElementProps {
  children: React.ReactNode
  className?: string
}

type TableComponent = React.FC<TableProps> & {
  Cell: React.FC<ChildElementProps>
  Row: React.FC<ChildElementProps>
  HeadCell: React.FC<ChildElementProps>
  Head: React.FC<ChildElementProps>
}

const Table: TableComponent = (props) => {
  const head = findByType(props.children, Table.Head);
  const rows = findByType(props.children, Table.Row);

  return (
    <div
      className={clsx(
        'rounded-xl border border-zinc-200 bg-white px-8 pt-8 pb-12 font-sans w-full',
        props.classes?.container
      )}
    >
      {props.label && (
        <h3
          className={clsx(
            'text-gray-900 font-semibold mb-4',
            props.classes?.header
          )}
        >
          {props.label}
        </h3>
      )}
      <table
        className={clsx(
          'w-full text-sm',
          props.classes?.table
        )}
      >
        {head}
        {rows.length > 0 && (
          <tbody>
            {rows}
          </tbody>
        )}
      </table>
    </div>
  )
}

Table.Head = (props: ChildElementProps) => (
  <thead
    className={clsx(
      'border-b border-zinc-200 text-zinc-500',
      props.className
    )}
  >
    {props.children}
  </thead>
)

Table.HeadCell = (props: ChildElementProps) => (
  <th
    className={clsx(
      'py-2.5 px-6 text-left',
      props.className
    )}
  >
    {props.children}
  </th>
)

Table.Row = (props: ChildElementProps) => (
  <tr
    className={clsx(
      'font-zinc-950 border-b border-zinc-100',
      props.className
    )}
  >
    {props.children}
  </tr>
)

Table.Cell = (props: ChildElementProps) => (
  <td
    className={clsx(
      'py-4 px-6',
      props.className
    )}
  >
    {props.children}
  </td>
)

export default Table
