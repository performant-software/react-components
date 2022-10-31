// @flow

import React, { Suspense } from 'react';
import i18n from '../i18n/i18n';

const withSuspense = (WrappedComponent) => (props) => (
  <Suspense
    fallback={(
      <div>{ i18n.t('Common.messages.loading') }</div>
    )}
  >
    <WrappedComponent
      {...props}
    />
  </Suspense>
);

export default withSuspense;
