// @flow

import React, { lazy, Suspense } from 'react';

const CloverIIIF = lazy(() => import('@samvera/clover-iiif'));

const IIIFViewer = (props) => (
  <Suspense
    fallback={<div>Loading...</div>}
  >
    <CloverIIIF
      {...props}
    />
  </Suspense>
);

export default IIIFViewer;
