import React, { useMemo } from 'react';
import Button from './Button';
import { HiArrowLongLeft, HiArrowLongRight } from 'react-icons/hi2';

interface Props {
  className?: string
  count: number
  current: number
}

const getFirstThree = (count: number, current: number) => {
  if (count <= 3) {
    return [1, 2, 3];
  }

  if (count >= current - 2) {
    return [count - 2, count - 1, count];
  }

  return [];
};

const Pagination: React.FC<Props> = (props) => {
  // const firstThree = useMemo(() => )

  return (
    <div className='flex justify-between'>
      <Button variant='plain'>
        <span className='flex gap-2 items-center'>
          <HiArrowLongLeft />
          Previous
        </span>
      </Button>
      <Button variant='plain'>
        <span className='flex gap-2 items-center'>
          Next
          <HiArrowLongRight />
        </span>
      </Button>
    </div>
  );
};

export default Pagination;