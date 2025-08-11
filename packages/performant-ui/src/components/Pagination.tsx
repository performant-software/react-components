import React, { useCallback, useMemo } from 'react';
import Button from './Button';
import { HiArrowLongLeft, HiArrowLongRight, HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Props {
  className?: string
  current: number
  onChange: (page: number) => void
  pageCount: number
}

const getPageBatches = (count: number, current: number) => {
  if (count <= 7) {
    const arr = []
    for (let i = 1; i <= count; i++) {
      arr.push(i)
    }
    return arr;
  }

  if (current > 3 && current < count - 2) {
    return [1, null, current - 1, current, current + 1, null, count]
  }

  if (current >= count - 2) {
    return [1, 2, 3, null, count - 2, count - 1, count];
  }

  if (current <= 3) {
    return [1, 2, 3, null, count - 2, count - 1, count]
  }

  return [];
};

const Pagination: React.FC<Props> = (props) => {
  const batches = useMemo(
    () => getPageBatches(props.pageCount, props.current),
    [props.pageCount, props.current]
  );

  const onNext = useCallback(() => props.onChange(props.current + 1), [props.current])
  const onPrevious = useCallback(() => props.onChange(props.current - 1), [props.current])

  return (
    <div className='flex justify-between font-sans'>
      <div className='flex gap-1'>
        <Button
          disabled={props.current <= 1}
          onClick={onPrevious}
          variant='outline'
        >
          <HiChevronLeft />
        </Button>
        {batches.map(pg => {
          if (pg) {
            return (
              <Button
                className='min-w-10'
                onClick={() => props.onChange(pg)}
                key={pg}
                variant={pg === props.current ? 'filled' : 'outline'}
              >
                {pg}
              </Button>
            )
          } else {
            return (
              <Button
                className='min-w-10'
                key={Math.random()}
                disabled
                variant='outline'
              >
                ...
              </Button>
            )
          }
        })}
        <Button
          disabled={props.current >= props.pageCount}
          onClick={onNext}
          variant='outline'
        >
          <HiChevronRight />
        </Button>
      </div>
    </div>
  );
};

export default Pagination;