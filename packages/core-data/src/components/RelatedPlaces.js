// @flow

import { MapPin } from 'lucide-react';
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
 * This component renders the related Core Data places.
 */
const RelatedPlaces = (props: Props) => (
  <RelatedList
    emptyMessage={props.emptyMessage}
    onLoad={props.onLoad}
    renderItem={(place) => (
      <>
        <MapPin
          className='h-4 w-4 mr-0.5 inline-block mb-0.5'
        />
        { place.body.title }
      </>
    )}
  />
);

export default RelatedPlaces;
