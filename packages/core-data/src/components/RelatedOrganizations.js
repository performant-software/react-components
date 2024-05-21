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
   * The label to display on the "Show More" button.
   */
  moreLabel: string,

  /**
   * Callback fired when the component is mounted to fetch the data.
   */
  onLoad: () => any,

  /**
   * Render function used to determine how to present the passed item.
   */
  renderItem: (item: any) => void,
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
    moreLabel={props.moreLabel}
    onLoad={props.onLoad}
    renderItem={props.renderItem || ((organization) => (
      <>
        <Building2
          className='h-4 w-4 mr-1.5'
        />
        { organization.name }
      </>
    ))}
  />
);

export default RelatedOrganizations;
