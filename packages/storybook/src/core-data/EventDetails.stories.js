// @flow

import { faker } from '@faker-js/faker';
import { Map, Zoom } from '@peripleo/maplibre';
import { Controls, Peripleo } from '@peripleo/peripleo';
import { action } from '@storybook/addon-actions';
import React from 'react';
import _ from 'underscore';
import CoreDataContextProvider from '../../../core-data/src/components/CoreDataContextProvider';
import EventDetails from '../../../core-data/src/components/EventDetails';
import EventsService from '../../../core-data/src/services/Events';
import mapStyle from '../data/MapStyles.json';
import RelatedItems from '../../../core-data/src/components/RelatedItems';
import RelatedMedia from '../../../core-data/src/components/RelatedMedia';
import RelatedPeople from '../../../core-data/src/components/RelatedPeople';
import RelatedPlacesLayer from '../../../core-data/src/components/RelatedPlacesLayer';

export default {
  title: 'Components/Core Data/EventDetails',
  component: EventDetails
};

export const Default = () => (
  <CoreDataContextProvider
    baseUrl=''
    projectIds={[]}
  >
    <EventDetails
      id={1}
    />
  </CoreDataContextProvider>
);

export const RelatedRecords = () => (
  <CoreDataContextProvider
    baseUrl=''
    projectIds={[]}
  >
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
                onLoad={(baseUrl, projectIds) => EventsService.fetchRelatedPlaces(baseUrl, 1, projectIds)}
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
          onLoad={(baseUrl, projectIds) => EventsService.fetchRelatedItems(baseUrl, 1, projectIds)}
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
          onLoad={(baseUrl, projectIds) => EventsService.fetchRelatedPeople(baseUrl, 1, projectIds)}
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
        onLoad={(baseUrl, projectIds) => EventsService.fetchRelatedManifests(baseUrl, 1, projectIds)}
      />
    </div>
  </CoreDataContextProvider>
);
