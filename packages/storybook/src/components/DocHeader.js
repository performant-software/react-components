// @flow

import React from 'react';
import withDocumentation from '../hooks/Documentation';
import './DocHeader.css';

type Props = {
  description: string,
  displayName: string
};

const DocHeader = (props: Props) => (
  <div
    className='doc-header'
  >
    <h1>
      { props.displayName }
    </h1>
    <p
      dangerouslySetInnerHTML={{
        __html: props.description
      }}
    />
  </div>
);

export default withDocumentation(DocHeader);
