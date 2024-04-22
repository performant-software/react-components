// @flow

import { MapPin } from 'lucide-react';
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
  onLoad: () => any,
};

/**
 * This component renders the related Core Data places.
 */
const RelatedPlaces = (props: Props) => (
  <RelatedList
    className={props.className}
    collectionName='places'
    emptyMessage={props.emptyMessage}
    itemsPerRow={props.itemsPerRow}
    onLoad={props.onLoad}
    renderItem={(place) => (
      <>
        <MapPin
          className='h-4 w-4 mr-0.5 inline-block mb-0.5'
        />
        { place.name }
      </>
    )}
  />
);

export default RelatedPlaces;
