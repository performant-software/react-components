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

const ColorButton = ({height = undefined, onClick = undefined, width = undefined, ...props}: Props) => (
  <Button
    className='color-button'
    onClick={onClick && onClick.bind(this)}
    style={{
      backgroundColor: props.color,
      cursor: onClick ? 'pointer' : 'default',
      height: height,
      width: width
    }}
    title='color-button'
  />
);

export default ColorButton;
