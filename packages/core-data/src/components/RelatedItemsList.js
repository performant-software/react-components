// @flow

import * as Accordion from '@radix-ui/react-accordion';
import React, { type Node } from 'react';
import './RelatedItemsList.css';

type Props = {
  children: Node
};

/**
 * This component renders the passed list of related items in an accordion fashion.
 */
const RelatedItemsList = (props: Props) => (
  <Accordion.Root
    className='related-items-list'
    type='multiple'
  >
    { props.children }
  </Accordion.Root>
);

export default RelatedItemsList;
