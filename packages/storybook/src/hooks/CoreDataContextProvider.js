// @flow

import React from 'react';
import CoreDataContextProvider from '../../../core-data/src/components/CoreDataContextProvider';

const withCoreDataContextProvider = (WrappedComponent) => (props) => (
  <CoreDataContextProvider
    baseUrl=''
    projectIds={[1]}
  >
    <WrappedComponent
      {...props}
    />
  </CoreDataContextProvider>
);

export default withCoreDataContextProvider;
