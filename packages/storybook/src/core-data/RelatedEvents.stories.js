// @flow

import React, { useState } from 'react';
import CoreDataContextProvider from '../../../core-data/src/components/CoreDataContextProvider';
import PlacesService from '../../../core-data/src/services/Places';
import RelatedEvents from '../../../core-data/src/components/RelatedEvents';

export default {
  title: 'Components/Core Data/RelatedEvents',
  component: RelatedEvents
};

export const Default = () => (
  <CoreDataContextProvider
    baseUrl=''
    projectIds={[10]}
  >
    <RelatedEvents
      onLoad={(baseUrl, projectIds) => (
        PlacesService.fetchRelatedEvents(baseUrl, '1', projectIds)
      )}
    />
  </CoreDataContextProvider>
);

export const Selection = () => {
  const [selectedEvent, setSelectedEvent] = useState();

  return (
    <CoreDataContextProvider
      baseUrl=''
      projectIds={[10]}
    >
      <RelatedEvents
        onClick={(event) => setSelectedEvent(event)}
        onLoad={(baseUrl, projectIds) => (
          PlacesService.fetchRelatedEvents(baseUrl, '1', projectIds)
        )}
        selected={selectedEvent}
      />
    </CoreDataContextProvider>
  );
};
