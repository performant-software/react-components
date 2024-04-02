// @flow

import { ListTree } from 'lucide-react';
import React from 'react';
import RelatedList from './RelatedList';

type Props = {
  /**
   * A message to display when no records are returned from the API.
   */
  emptyMessage?: string,

  /**
   * Callback fired when the component is mounted to fetch the data.
   */
  onLoad: () => any,
};

/**
 * This component renders the related Core Data taxonomies.
 */
const RelatedTaxonomies = (props: Props) => (
  <RelatedList
    emptyMessage={props.emptyMessage}
    onLoad={props.onLoad}
    renderItem={(taxonomy) => (
      <>
        <ListTree
          className='h-4 w-4 mr-1.5'
        />
        { taxonomy.body.title }
      </>
    )}
  />
);

export default RelatedTaxonomies;
