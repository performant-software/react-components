// @flow

import React from 'react';
import { Button } from 'semantic-ui-react';
import './ArrowButtons.css';

type Props = {
  /**
   * Callback for left arrow click
   */
  onLeft: () => void,

  /**
   * Callback for right arrow click
   */
  onRight: () => void,
};

/**
 * A component used to move items from left to right or right to left.
 */
const ArrowButtons = (props: Props) => (
  <Button.Group
    className='arrow-buttons'
    vertical
  >
    <Button
      aria-label='Move Right'
      basic
      icon='arrow right'
      onClick={props.onRight.bind(this)}
    />
    <Button
      aria-label='Move Left'
      basic
      icon='arrow left'
      onClick={props.onLeft.bind(this)}
    />
  </Button.Group>
);

export default ArrowButtons;
