// @flow

import React from 'react';
import CoreDataContextProvider from '../../../core-data/src/components/CoreDataContextProvider';
import EventsService from '../../../core-data/src/services/Events';
import RelatedItems from '../../../core-data/src/components/RelatedItems';

export default {
  title: 'Components/Core Data/RelatedItems',
  component: RelatedItems
};

export const Default = () => (
  <CoreDataContextProvider
    baseUrl=''
    projectIds={[]}
  >
    <RelatedItems
      onClick={(item) => console.log(item)}
      onLoad={(baseUrl, projectIds) => EventsService.fetchRelatedItems(baseUrl, 1, projectIds)}
    />
  </CoreDataContextProvider>

);
