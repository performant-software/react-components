// @flow

import React from 'react';
import { Map, Zoom } from '@peripleo/maplibre';
import { Controls, Peripleo } from '@peripleo/peripleo';
import CoreDataContextProvider from '../../../core-data/src/components/CoreDataContextProvider';
import EventsService from '../../../core-data/src/services/Events';
import mapStyle from '../data/MapStyles.json';
import RelatedPlacesLayer from '../../../core-data/src/components/RelatedPlacesLayer';

export default {
  title: 'Components/Core Data/RelatedPlacesLayer',
  component: RelatedPlacesLayer
};

export const Default = () => (
  <CoreDataContextProvider
    baseUrl=''
    projectIds={[]}
  >
    <Peripleo>
      <Map
        style={mapStyle}
      >
        <Controls
          position='topright'
        >
          <Zoom />
        </Controls>
        <div
          style={{
            width: '100%',
            height: '300px'
          }}
        >
          <RelatedPlacesLayer
            buffer={10}
            onLoad={(baseUrl, projectIds) => EventsService.fetchRelatedPlaces(baseUrl, 1, projectIds)}
          />
        </div>
      </Map>
    </Peripleo>
  </CoreDataContextProvider>
);
