// @flow

import React from 'react';
import { Image, Loader } from 'semantic-ui-react';
import './LazyLoader.css';

type Props = {
  active: boolean,
  size: string
};

const LazyLoader = (props: Props) => (
  <Image
    className='lazy-loader'
    size={props.size}
  >
    <Loader
      active={props.active}
    />
  </Image>
);

LazyLoader.defaultProps = {
  active: false,
  size: 'small'
};

export default LazyLoader;
