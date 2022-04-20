// @flow

import React from 'react';
import { Button } from 'semantic-ui-react';
import './ColorButton.css';

type Props = {
  color: string,
  height?: number,
  onClick?: () => void,
  width?: number
}

const ColorButton = (props: Props) => (
  <Button
    className='color-button'
    onClick={props.onClick && props.onClick.bind(this)}
    style={{
      backgroundColor: props.color,
      cursor: props.onClick ? 'pointer' : 'default',
      height: props.height,
      width: props.width
    }}
    title='color-button'
  />
);

ColorButton.defaultProps = {
  height: undefined,
  onClick: undefined,
  width: undefined
};

export default ColorButton;
