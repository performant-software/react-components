// @flow

import { faker } from '@faker-js/faker';
import { Map, Zoom } from '@peripleo/maplibre';
import { Controls, Peripleo } from '@peripleo/peripleo';
import { action } from '@storybook/addon-actions';
import React from 'react';
import _ from 'underscore';
import EventDetails from '../../../core-data/src/components/EventDetails';
import mapStyle from '../data/MapStyles.json';
import RelatedItems from '../../../core-data/src/components/RelatedItems';
import RelatedMedia from '../../../core-data/src/components/RelatedMedia';
import RelatedPeople from '../../../core-data/src/components/RelatedPeople';
import RelatedPlacesLayer from '../../../core-data/src/components/RelatedPlacesLayer';
import withCoreDataContextProvider from '../hooks/CoreDataContextProvider';
import { useEventsService } from '../../../core-data/src/hooks/CoreData';

export default {
  title: 'Components/Core Data/EventDetails',
  component: EventDetails
};

export const Default = withCoreDataContextProvider(() => (
  <EventDetails
    id='1'
  />
));

export const RelatedRecords = withCoreDataContextProvider(() => {
  const EventsService = useEventsService();

  return (
    <div
      className='p-3'
    >
      <EventDetails
        id={1}
      />
      <div
        className='py-2'
      >
        <h2
          className='py-1 font-bold text-lg'
        >
          Event Location
        </h2>
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
                onLoad={(params) => EventsService.fetchRelatedPlaces('1', params)}
              />
            </div>
          </Map>
        </Peripleo>
      </div>
      <div
        className='py-2'
      >
        <h2
          className='py-2 font-bold text-lg'
        >
          Related Resources
        </h2>
        <RelatedItems
          onClick={(item) => action('click')(item)}
          onLoad={(params) => EventsService.fetchRelatedItems('1', params)}
          renderDescription={() => faker.date.anytime().toLocaleDateString()}
          renderHeader={() => _.sample(['documents', 'photos', 'certificates', 'licenses'])}
          renderImage={(item) => (
            <img
              alt='Test'
              src={`https://picsum.photos/800/600?random=${item.uuid}`}
            />
          )}
        />
      </div>
      <div
        className='py-2'
      >
        <h2
          className='py-2 font-bold text-lg'
        >
          Related People
        </h2>
        <RelatedPeople
          itemsPerRow={2}
          onLoad={(params) => EventsService.fetchRelatedPeople('1', params)}
        />
      </div>
      <div
        className='py-2'
      >
        <h2
          className='py-2 font-bold text-lg'
        >
          Event Images
        </h2>
      </div>
      <RelatedMedia
        itemsPerRow={4}
        onLoad={(params) => EventsService.fetchRelatedManifests('1', params)}
      />
    </div>
  );
});
