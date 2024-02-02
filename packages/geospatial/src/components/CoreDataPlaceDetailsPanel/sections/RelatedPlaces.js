// @flow

import React from 'react';
import { AnnotationPage } from '@peripleo/peripleo';
import { MapPin } from 'lucide-react';
import { CoreDataRelatedPlace } from '../../CoreDataTypes';

interface RelatedPlacesProps {

  data: AnnotationPage<CoreDataRelatedPlace>;

}

export const RelatedPlaces = (props: RelatedPlacesProps) => {

  const places = props.data.items;

  return places.length === 0 ? (
    <div className="pt-6 pl-3 pr-6 pb-8 flex items-center justify-center text-muted/50 italic">
      No related places
    </div>
  ) : (
    <ul className="p-3 pt-1 pb-4">
      {places.map(a => (
        <li key={a.id} className="overflow-hidden">
          <MapPin className="h-4 w-4 mr-0.5 inline-block mb-0.5" /> {a.body.title}
        </li>
      ))}
    </ul>
  )

}