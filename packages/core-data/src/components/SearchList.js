// @flow

import React, {
  memo,
  useCallback,
  useState,
  useRef
} from 'react';
import clsx from 'clsx';
import { type Attribute } from '../types/SearchList';
import SearchListItem from './SearchListItem';
import i18n from '../i18n/i18n';
import InfiniteScroll from '../../../shared/src/components/InfiniteScroll';

type Props = {
  /**
   * Attributes to display (only the first three will be shown)
   */
  attributes?: Attribute[],
  /**
   * Class name to apply to the root button element.
   */
  className?: string,
  /**
   * Optional callback that determines whether to highlight an item
   */
  isHighlight?: (item: any) => boolean,
  /**
   * Array of search result items
   */
  items: Array<any>,
  /**
   * Field name or callback function to return the title of an item
   */
  itemTitle: string | (item: any) => string,
  /**
   * Callback that fires when an item is clicked
   */
  onItemClick?: (item: any) => void,
  /**
   * Callback that fires when the pointer begins to hover over an item
   */
  onItemPointerEnter?: (item: any) => void,
  /**
   * Callback that fires when the pointer stops hovering over an item
   */
  onItemPointerLeave?: (item: any) => void
};

const LIMIT_STEP = 50;

/**
 * Memoize the search list item component so it doesn't
 * re-render when we increase the limit value in SearchList.
 */
const MemoizedSearchListItem = memo(SearchListItem);

const SearchList = (props: Props) => {
  /**
   * Set the max number of items to display.
   */
  const [limit, setLimit] = useState(LIMIT_STEP);

  const listRef = useRef(null);

  /**
   * Increase the limit value when the user scrolls 90% down in the list.
   */
  const onBottomReached = useCallback(() => {
    setLimit((oldLimit) => {
      if (props.items.length > oldLimit) {
        return oldLimit + LIMIT_STEP;
      }

      return oldLimit;
    });
  }, [props.items]);

  return (
    <div className={clsx(
      'h-full flex flex-col',
      props.className
    )}
    >
      <div className='text-sm italic bg-white sticky top-0 py-2.5 px-6 shadow-sm'>
        {props.items.length}
        &nbsp;
        {props.items.length === 1
          ? i18n.t('Common.words.result')
          : i18n.t('Common.words.results') }
      </div>
      <div
        className='overflow-y-auto h-full divide-y divide-solid divide-neutral-200'
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={0}
        ref={listRef}
      >
        <InfiniteScroll
          offset={150}
          onBottomReached={onBottomReached}
          context={listRef}
          key={props.items.length}
        >
          {props.items.slice(0, limit).map((item, idx) => (
            <MemoizedSearchListItem
              attributes={props.attributes}
              key={idx}
              item={item}
              isHighlight={props.isHighlight && props.isHighlight(item)}
              title={typeof props.itemTitle === 'string' ? item[props.itemTitle] : props.itemTitle(item)}
              onClick={props.onItemClick}
              onPointerEnter={props.onItemPointerEnter}
              onPointerLeave={props.onItemPointerLeave}
            />
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default SearchList;
