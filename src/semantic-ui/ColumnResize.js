// @flow

import React from 'react';
import './ColumnResize.css';

type Props = {
  onMouseDown: (e: MouseEvent) => void
};

const ColumnResize = (props: Props) => (
  <div
    className='column-resize'
    onMouseDown={props.onMouseDown.bind(this)}
    role='presentation'
  >
    &nbsp;
  </div>
);

export default ColumnResize;
