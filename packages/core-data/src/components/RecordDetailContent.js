// @flow

import clsx from 'clsx';
import React, {
  type Node,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import _ from 'underscore';
import Button from './Button';
import i18n from '../i18n/i18n';
import RecordDetailItem from './RecordDetailItem';

type Item = {
  className?: string,
  icon?: string,
  text: string
};

type Props = {
  children?: Node,
  classNames?: {
    root?: string,
    items?: string
  },
  items: Array<Item>
};

const RecordDetailContent = (props: Props) => {
  const [expanded, setExpanded] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  const content = useRef(null);

  /**
   * Sets the content and container heights on the state.
   *
   * @type {ResizeObserver}
   */
  const observer = useMemo(() => new ResizeObserver((entries) => {
    const { target } = entries[0];

    setContentHeight(target.scrollHeight);
    setContainerHeight(target.clientHeight);
  }), []);

  /**
   * Sets the resize ref when the observer changes.
   *
   * @type {(function(*): void)|*}
   */
  const sizeRef = useCallback((node) => {
    if (node) {
      content.current = node;
      observer.observe(node);
    } else {
      content.current = null;
    }
  }, [observer]);

  /**
   * Toggles the "Show More" button based on the content and container heights.
   */
  useEffect(() => {
    if (content.current) {
      setShowMore(contentHeight > containerHeight || expanded);
    }
  }, [contentHeight, containerHeight]);

  /**
   * Disconnects the observer.
   */
  useEffect(() => () => observer.disconnect(), []);

  return (
    <>
      <div
        className={clsx(
          'flex',
          'flex-col',
          'relative',
          props.classNames?.root,
          { 'max-h-[250px]': !expanded }
        )}
      >
        <div
          className='overflow-hidden'
          ref={sizeRef}
        >
          <ul
            className={props.classNames?.items}
          >
            { _.map(props.items, (item, idx) => (
              <RecordDetailItem
                className={item.className}
                key={idx}
                icon={item.icon}
                text={item.text}
              />
            ))}
          </ul>
          { props.children }
        </div>
        { showMore && !expanded && (
          <div
            className='absolute left-0 bottom-0 w-full h-[50px] bg-gradient-to-b from-white/50 to-white/100'
          />
        )}
      </div>
      { showMore && (
        <Button
          className='w-full justify-center mb-4'
          onClick={() => setExpanded((current) => (!current))}
          rounded
        >
          { expanded
            ? i18n.t('RecordDetailHeader.showLess')
            : i18n.t('RecordDetailHeader.showMore') }
        </Button>
      )}
    </>
  );
};

export default RecordDetailContent;
