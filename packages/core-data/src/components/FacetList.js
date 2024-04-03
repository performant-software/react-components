// @flow

import React, { type Node } from 'react';

type Props = {
  /**
   * Label for the list.
   */
  label: string,

  /**
   * Callback fired to render the list content.
   *
   * @param attribute
   */
  renderList: (attribute: string) => Node,
};

/**
 * This component renders a wrapper for a facet list.
 */
const FacetList = (props: Props) => (
  <div
    className='facet-list'
  >
    <h3
      className='mt-5 font-medium text-sm mb-2 flex items-center'
    >
      <span>
        { props.label }
      </span>
    </h3>
    { props.renderList() }
  </div>
);

export default FacetList;
