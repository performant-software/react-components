import React from 'react'
import { Element } from '@performant-software/shared-components';

interface Props {
  label?: string
}

const Table: React.FC<Props> = (props) => {
  const head = Element.findByType(props.children, Table.Head);

  return (
    <div
      className='rounded-xl border border-zinc-200 bg-white px-8 pt-8 pb-12'
    >
      <table
        className=''
      >
        {head}
      </table>
    </div>
  )
}

interface TableHeadProps {
  children: React.ElementType | React.ElementType[]
}

Table.Head = (props: TableHeadProps) => (
  <thead>
    {props.children}
  </thead>
)

export default Table
