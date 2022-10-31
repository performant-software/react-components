// @flow

import React, { lazy, Suspense } from 'react';
import i18n from '../i18n/i18n';

const IIIFViewer = (props) => {
  const CloverIIIF = lazy(() => import('@samvera/clover-iiif'));

  return (
    <Suspense
      fallback={(
        <div>{ i18n.t('Common.messages.loading') }</div>
      )}
    >
      <CloverIIIF
        {...props}
      />
    </Suspense>
  );
};

export default IIIFViewer;
