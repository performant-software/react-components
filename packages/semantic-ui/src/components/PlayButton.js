// @flow

import React from 'react';
import { Button } from 'semantic-ui-react';
import './PlayButton.css';

type Props = {
  /**
   * What to do when the button is clicked.
   */
  onClick?: () => void,
    /**
   * Size of the button.
   */
  size?: 'mini' | 'tiny' | 'small' | 'medium' | 'large' | 'big' | 'huge' | 'massive',
    /**
   * Custom styling object.
   */
  style?: any
};

/**
 * This component can be used as a toggle for playing media.
 */
const PlayButton = ({onClick = undefined, size = 'massive', style = undefined, ...props}: Props) => (
  <Button
    className='play-button'
    color='black'
    icon='play'
    onClick={(e) => {
      if (onClick) {
        e.stopPropagation();

        // $FlowFixMe - Not really an issue since we're checking for onClick above.
        onClick();
      }
    }}
    size={size}
    style={style}
  />
);

export default PlayButton;
