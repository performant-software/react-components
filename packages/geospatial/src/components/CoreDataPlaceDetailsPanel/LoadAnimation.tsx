// @flow 

import React from 'react';

import './LoadAnimation.css';

interface LoadAnimationProps {

  className?: string;

}

export const LoadAnimation = (props: LoadAnimationProps) => {

  const className = `${props.className || ''} loader three-dots`.trim();

  return (
    <span className={className}></span>
  )

}