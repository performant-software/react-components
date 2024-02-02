// @flow

import React from 'react';
import RelatedMedia from '../../../core-data/src/components/RelatedMedia';
import relatedMedia from '../data/RelatedMedia.json';

export default {
  title: 'Components/Core Data/RelatedMedia',
  component: RelatedMedia
};

export const Default = () => (
  <RelatedMedia
    data={relatedMedia}
  />
);
