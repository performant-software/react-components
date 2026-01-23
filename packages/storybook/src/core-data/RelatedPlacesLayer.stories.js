// @flow

import React from 'react';
import { Map } from '@peripleo/maplibre';
import { Peripleo } from '@peripleo/peripleo';
import mapStyle from '../data/MapStyles.json';
import RelatedPlacesLayer from '../../../core-data/src/components/RelatedPlacesLayer';
import { useEventsService } from '../../../core-data/src/hooks/CoreData';
import withCoreDataContextProvider from '../hooks/CoreDataContextProvider';

export default {
  title: 'Components/Core Data/RelatedPlacesLayer',
  component: RelatedPlacesLayer
};

export const Default = withCoreDataContextProvider(() => {
  const EventsService = useEventsService();

  return (
    <Peripleo>
      <Map
        style={mapStyle}
      >
        <div
          style={{
            width: '100%',
            height: '300px'
          }}
        >
          <RelatedPlacesLayer
            buffer={10}
            onLoad={(params) => EventsService.fetchRelatedPlaces('1', params)}
          />
        </div>
      </Map>
    </Peripleo>
  );
});
