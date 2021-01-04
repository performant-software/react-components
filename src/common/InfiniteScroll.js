// @flow

import { useEffect, type Element } from 'react';

type Props = {
  children: Element<any>,
  context?: HTMLElement,
  offset: number,
  onBottomReached: () => void
};

const InfiniteScroll = (props: Props) => {
  const onScroll = () => {
    const context = props.context || document.documentElement || {};
    const { scrollTop, clientHeight, scrollHeight } = context;

    if ((scrollTop + clientHeight) >= (scrollHeight - props.offset)) {
      props.onBottomReached();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll.bind(this), { passive: true });
    return () => window.removeEventListener('scroll', onScroll.bind(this));
  }, []);

  return props.children;
};

InfiniteScroll.defaultProps = {
  offset: 0
};

export default InfiniteScroll;
