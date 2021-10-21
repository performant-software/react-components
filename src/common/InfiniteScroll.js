// @flow

import React, {
  useEffect,
  useRef,
  useState,
  type Element
} from 'react';
import { isBrowser } from '../utils/Browser';

type Props = {
  children: Element<any>,
  context?: { current: HTMLElement },
  offset: number,
  onBottomReached: () => void
};

const InfiniteScroll = (props: Props) => {
  const [height, setHeight] = useState(0);
  const containerRef = useRef();

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
    let scrollContainer;

    if (props.context) {
      scrollContainer = props.context.current;
    } else if (isBrowser()) {
      scrollContainer = window;
    }

    if (!scrollContainer) {
      return undefined;
    }

    scrollContainer.addEventListener('scroll', onScroll);
    return () => scrollContainer && scrollContainer.removeEventListener('scroll', onScroll);
  }, [props.context]);

  /**
   * Returns true if the context element is scrollable.
   *
   * @returns {boolean}
   */
  const isScrollable = () => {
    let scrollable = false;

    const element = getScrollElement();
    if (element) {
      const { clientHeight, scrollHeight } = element;
      scrollable = scrollHeight > clientHeight;
    }

    return scrollable;
  };

  /**
   * Upon initial render, the DOM may not be tall enough to scroll and trigger the onScroll event. In this case,
   * we'll call the onBottomReached prop when the component is mounted until the container's scrollHeight is greater
   * than the height of the container.
   */
  useEffect(() => {
    if (!isScrollable() && containerRef && containerRef.current) {
      const { clientHeight } = containerRef.current;

      if (clientHeight > height) {
        setHeight(clientHeight);
        props.onBottomReached();
      }
    }
  });

  return (
    <div
      ref={containerRef}
    >
      { props.children }
    </div>
  );
};

InfiniteScroll.defaultProps = {
  offset: 0
};

export default InfiniteScroll;
