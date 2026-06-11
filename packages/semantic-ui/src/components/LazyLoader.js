// @flow

import React from 'react';
import { Image, Loader } from 'semantic-ui-react';
import './LazyLoader.css';

type Props = {
  active: boolean,
  size: string
};

const LazyLoader = ({active = false, size = 'small', ...props}: Props) => (
  <Image
    className='lazy-loader'
    size={size}
  >
    <Loader
      active={active}
    />
  </Image>
);

export default LazyLoader;
