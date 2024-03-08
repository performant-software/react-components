// @flow

import { action } from '@storybook/addon-actions';
import React from 'react';
import PlaceDetailsPanel from '../../../core-data/src/components/PlaceDetailsPanel';
import place from '../data/Place.json';
import relatedMedia from '../data/RelatedMedia.json';
import relatedPlaces from '../data/RelatedPlaces.json';

export default {
  title: 'Components/Core Data/PlaceDetailsPanel',
  component: PlaceDetailsPanel
};

export const Default = () => (
  <PlaceDetailsPanel
    onClose={action('close')}
    place={place}
    related={[{
      endpoint: 'media_contents',
      ui_label: 'Related Media',
      data: relatedMedia
    }, {
      endpoint: 'places',
      ui_label: 'Related Places',
      data: relatedPlaces
    }]}
  />
);
