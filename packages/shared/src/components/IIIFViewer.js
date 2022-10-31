// @flow

import React from 'react';
import CloverIIIF from '@samvera/clover-iiif';
import Browser from '../utils/Browser';

const IIIFViewer = (props) => {
  if (!Browser.isBrowser()) {
    return null;
  }

  return (
    <CloverIIIF
      {...props}
    />
  );
};

export default IIIFViewer;
