// @flow

import { action } from '@storybook/addon-actions';
import React from 'react';
import RelatedSources from '../../../core-data/src/components/RelatedSources';
import { useEventsService } from '../../../core-data/src/hooks/CoreData';
import withCoreDataContextProvider from '../hooks/CoreDataContextProvider';

export default {
  title: 'Components/Core Data/RelatedSources',
  component: RelatedSources
};

export const Default = withCoreDataContextProvider(() => {
  const EventsService = useEventsService();

  return (
    <RelatedSources
      onClick={action('click')}
      onLoad={(params) => EventsService.fetchRelatedItems('1', params)}
      sourceType='items'
    />
  );
});

export const Instances = withCoreDataContextProvider(() => {
  const EventsService = useEventsService();

  return (
    <RelatedSources
      onClick={action('click')}
      onLoad={(params) => EventsService.fetchRelatedInstances('1', params)}
      sourceType='instances'
    />
  );
});

export const Works = withCoreDataContextProvider(() => {
  const EventsService = useEventsService();

  return (
    <RelatedSources
      onClick={action('click')}
      onLoad={(params) => EventsService.fetchRelatedWorks('1', params)}
      sourceType='works'
    />
  );
});
