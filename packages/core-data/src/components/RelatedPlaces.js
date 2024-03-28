// @flow

import { MapPin } from 'lucide-react';
import React from 'react';
import i18n from '../i18n/i18n';
import RelatedList from './RelatedList';

type Props = {
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
    emptyMessage={i18n.t('RelatedPlaces.labels.empty')}
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
