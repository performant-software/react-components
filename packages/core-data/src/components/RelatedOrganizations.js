// @flow

import { Building2 } from 'lucide-react';
import React from 'react';
import RelatedList from './RelatedList';

type Props = {
  /**
   * Name of the class(es) to apply to the <ul> element.
   */
  className?: string,

  /**
   * A message to display when no records are returned from the API.
   */
  emptyMessage?: string,

  /**
   * Number of items to display in each row of the grid.
   */
  itemsPerRow?: number,

  /**
   * Callback fired when the component is mounted to fetch the data.
   */
  onLoad: () => any
};

/**
 * This component renders the related Core Data organizations records.
 */
const RelatedOrganizations = (props: Props) => (
  <RelatedList
    className={props.className}
    collectionName='organizations'
    emptyMessage={props.emptyMessage}
    itemsPerRow={props.itemsPerRow}
    onLoad={props.onLoad}
    renderItem={(organization) => (
      <>
        <Building2
          className='h-4 w-4 mr-1.5'
        />
        { organization.name }
      </>
    )}
  />
);

export default RelatedOrganizations;
