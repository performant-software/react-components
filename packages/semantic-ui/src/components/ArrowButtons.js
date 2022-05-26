// @flow

import React from 'react';
import { Button } from 'semantic-ui-react';
import './ArrowButtons.css';

type Date = {
  accuracy: number,
  description: string,
  endDate?: Date,
  range: boolean,
  startDate?: Date
};

type Props = {
  onLeft: (data: Date) => void,
  onRight: (data: Date) => void
};

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
