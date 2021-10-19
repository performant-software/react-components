// @flow

import { useCallback, useEffect, type Element } from 'react';
import { isBrowser } from '../utils/Browser';

type Props = {
  children: Element<any>,
  context?: { current: HTMLElement },
  offset: number,
  onBottomReached: () => void
};

const InfiniteScroll = (props: Props) => {
  /**
   * Returns the container to use for the scroll list.
   *
   * @type {function(): *}
   */
  const getScrollContainer = useCallback(() => {
    let scrollContainer;

    if (props.context) {
      scrollContainer = props.context.current;
    } else if (isBrowser()) {
      scrollContainer = window;
    }

    return scrollContainer;
  });

  /**
   * Returns the scrolling element.
   *
   * @returns {*}
   */
  const getScrollElement = () => {
    let scrollElement;

    if (props.context) {
      scrollElement = props.context.current;
    } else if (isBrowser()) {
      scrollElement = document.documentElement;
    }

    return scrollElement;
  };

  /**
   * Calls the onBottomReached prop if the scroll has reached the end.
   */
  const onScroll = () => {
    const element = getScrollElement();

    if (element) {
      const { scrollTop, clientHeight, scrollHeight } = element;

      if ((scrollTop + clientHeight) >= (scrollHeight - props.offset)) {
        props.onBottomReached();
      }
    }
  };

  /**
   * Sets up the container scroll event listeners.
   */
  useEffect(() => {
    const container = getScrollContainer();
    if (!container) {
      return undefined;
    }

    container.addEventListener('scroll', onScroll);
    return () => container.removeEventListener('scroll', onScroll);
  }, [getScrollContainer]);

  /**
   * Upon initial render, the DOM may not be tall enough to scroll and trigger the onScroll event. In this case,
   * we'll call the onBottomReached prop when the component is mounted until the container's scrollHeight is greater
   * than the height of the container.
   */
  useEffect(() => {
    const element = getScrollElement();

    if (element) {
      const { clientHeight, scrollHeight } = element;

      console.log('clientHeight', clientHeight);
      console.log('scrollHeight', scrollHeight);

      if (scrollHeight === clientHeight) {
        props.onBottomReached();
      }
    }
  });

  return props.children;
};

InfiniteScroll.defaultProps = {
  offset: 0
};

export default InfiniteScroll;
