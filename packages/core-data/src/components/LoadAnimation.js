// @flow

import React from 'react';

type Props = {
  /**
   * Additional class name to apply to the element.
   */
  className?: string
};

/**
 * This component renders a basic loading animation.
 */
const LoadAnimation = (props: Props) => {
  const className = `${props.className || ''} loader three-dots`.trim();

  return (
    <span className={className} />
  );
};

export default LoadAnimation;
