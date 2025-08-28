import React, { useMemo } from 'react'

interface Props {
  perPage: number,
  page: number,
  itemCount: number
}

const PageStats: React.FC<Props> = (props) => {
  const start = (props.perPage * (props.page - 1)) + 1
  const end = Math.min(start + props.perPage - 1, props.itemCount)

  return (
    <p className='text-sm font-sans'>
      Showing&nbsp;
      <span className='font-semibold'>{start}</span>
      &nbsp;to&nbsp;
      <span className='font-semibold'>{end}</span>
      &nbsp;of&nbsp;
      <span className='font-semibold'>{props.itemCount}</span>
    </p>
  );
}

export default PageStats
