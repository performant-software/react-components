// @flow

import { MapPin } from 'lucide-react';
import React from 'react';
import type { AnnotationPage } from '../types/AnnotationPage';
import type { Place } from '../types/Place';
import RelatedList from './RelatedList';

type Props = {
  data: AnnotationPage<Place>
};

const RelatedPlaces = (props: Props) => (
  <RelatedList
    data={props.data}
    emptyMessage={'No related places'}
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
