// @flow

import React, { lazy } from 'react';
import withSuspense from '../hooks/Suspense';

const IIIFViewer = withSuspense((props) => {
  const CloverIIIF = lazy(() => import('@samvera/clover-iiif'));

  return (
    <CloverIIIF
      {...props}
    />
  );
});

export default IIIFViewer;
