// @flow

import { action } from '@storybook/addon-actions';
import React from 'react';
import RelatedWorks from '../../../core-data/src/components/RelatedWorks';
import { useEventsService } from '../../../core-data/src/hooks/CoreData';
import withCoreDataContextProvider from '../hooks/CoreDataContextProvider';

export default {
  title: 'Components/Core Data/RelatedWorks',
  component: RelatedWorks
};

export const Default = withCoreDataContextProvider(() => {
  const EventsService = useEventsService();

  return (
    <RelatedWorks
      onClick={action('click')}
      onLoad={(params) => EventsService.fetchRelatedWorks('1', params)}
    />
  );
});
