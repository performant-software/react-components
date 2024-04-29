// @flow

import React, { useState } from 'react';
import _ from 'underscore';
import RelatedEvents from '../../../core-data/src/components/RelatedEvents';
import { usePlacesService } from '../../../core-data/src/hooks/CoreData';
import withCoreDataContextProvider from '../hooks/CoreDataContextProvider';

export default {
  title: 'Components/Core Data/RelatedEvents',
  component: RelatedEvents
};

export const Default = withCoreDataContextProvider(() => {
  const PlacesService = usePlacesService();

  return (
    <RelatedEvents
      onLoad={(params) => PlacesService.fetchRelatedEvents('1', params)}
    />
  );
});

export const Selection = withCoreDataContextProvider(() => {
  const [selectedEvent, setSelectedEvent] = useState();
  const PlacesService = usePlacesService();

  return (
    <RelatedEvents
      onClick={(event) => setSelectedEvent(event)}
      onLoad={(params) => PlacesService.fetchRelatedEvents('1', params)}
      selected={selectedEvent}
    />
  );
});

export const Pagination = withCoreDataContextProvider(() => {
  const PlacesService = usePlacesService();

  return (
    <RelatedEvents
      onLoad={(params) => (
        PlacesService
          .fetchRelatedEvents('1', params)
          .then((response) => {
            _.extend(response.list, { pages: 5, count: 22 });
            return response;
          })
      )}
    />
  );
});
