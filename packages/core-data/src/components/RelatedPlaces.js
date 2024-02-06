// @flow

import { MapPin } from 'lucide-react';
import React from 'react';
import i18n from '../i18n/i18n';
import type { AnnotationPage } from '../types/AnnotationPage';
import type { Place } from '../types/Place';
import RelatedList from './RelatedList';

type Props = {
  /**
   * The annotation page containing the Core Data places to render.
   */
  data: AnnotationPage<Place>
};

/**
 * This component renders the related Core Data places.
 */
const RelatedPlaces = (props: Props) => (
  <RelatedList
    data={props.data}
    emptyMessage={i18n.t('RelatedPlaces.labels.empty')}
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
