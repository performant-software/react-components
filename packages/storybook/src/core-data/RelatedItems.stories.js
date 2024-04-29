// @flow

import { action } from '@storybook/addon-actions';
import React from 'react';
import RelatedItems from '../../../core-data/src/components/RelatedItems';
import { useEventsService } from '../../../core-data/src/hooks/CoreData';
import withCoreDataContextProvider from '../hooks/CoreDataContextProvider';

export default {
  title: 'Components/Core Data/RelatedItems',
  component: RelatedItems
};

export const Default = withCoreDataContextProvider(() => {
  const EventsService = useEventsService();

  return (
    <RelatedItems
      onClick={action('click')}
      onLoad={(params) => EventsService.fetchRelatedItems('1', params)}
    />
  );
});
