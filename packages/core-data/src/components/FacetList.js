// @flow

import React, { type Node } from 'react';

type Props = {
  label: string,
  renderList: (attribute: string) => Node,
  value: string
};

const FacetList = (props: Props) => (
  <div
    className='facet-list'
    key={props.value}
  >
    <h3
      className='mt-5 font-medium text-sm mb-2 flex items-center'
    >
      <span
        title={props.value}
      >
        { props.label }
      </span>
    </h3>
    { props.renderList() }
  </div>
);

export default FacetList;
