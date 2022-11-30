// @flow

import React, { lazy } from 'react';
import withSuspense from '../hooks/Suspense';

const CloverIIIF = lazy(() => import('@samvera/clover-iiif'));

const IIIFViewer = withSuspense((props) => (
  <CloverIIIF
    {...props}
  />
));

export default IIIFViewer;
