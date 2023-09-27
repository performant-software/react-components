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

const PlayButton = (props: Props) => (
  <Button
    className='play-button'
    color='black'
    icon='play'
    onClick={(e) => {
      if (props.onClick) {
        e.stopPropagation();

        // $FlowFixMe - Not really an issue since we're checking for props.onClick above.
        props.onClick();
      }
    }}
    size={props.size}
    style={props.style}
  />
);

PlayButton.defaultProps = {
  onClick: undefined,
  size: 'massive',
  style: undefined
};

export default PlayButton;
