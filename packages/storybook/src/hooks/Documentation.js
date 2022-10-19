// @flow

import React from 'react';

type Props = {
  item: {
    __documentation: any
  }
};

const withDocumentation = (WrappedComponent) => (props: Props) => (
  <WrappedComponent
    {...props}
    {...props.item?.__documentation}
  />
);

export default withDocumentation;
