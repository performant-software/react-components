// @flow

import React from 'react';
import { RefinementList } from 'react-instantsearch';
import './FacetList.css';

type Props = {
  label: string,
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
    <RefinementList
      attribute={props.value}
    />
  </div>
);

export default FacetList;
