import React from 'react'
import { Element } from '@performant-software/shared-components';
import clsx from 'clsx';

interface Props {
  label?: string
}

const Table: React.FC<Props> = (props) => {
  const head = Element.findByType(props.children, Table.Head);
  const rows = Element.findByType(props.children, Table.Row);

  return (
    <div
      className='rounded-xl border border-zinc-200 bg-white px-8 pt-8 pb-12'
    >
      <table
        className=''
      >
        {head}
        {rows}
      </table>
    </div>
  )
}

interface ChildElementProps {
  children: React.ElementType | React.ElementType[]
  className?: string
}

Table.Head = (props: ChildElementProps) => (
  <thead
    className={clsx(
      props.className
    )}
  >
    {props.children}
  </thead>
)

Table.HeadCell = (props: ChildElementProps) => (
  <th
    className={clsx(
      'py-4 px-6',
      props.className
    )}
  >
    {props.children}
  </th>
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

Table.Row = (props: ChildElementProps) => (
  <tr
    className={clsx(
      props.className
    )}
  >
    {props.children}
  </tr>
)

export default Table
